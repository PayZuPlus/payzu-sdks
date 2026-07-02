import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu, PayZuError } from '../src/index.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer, testClient } from './support/test-client.js';

const server = createTestServer();
const apiError = {
  statusCode: 400,
  error: 'Bad Request',
  message: 'Valor mínimo do depósito é R$ 1,00.',
  errorCode: 'PZA100',
  requestId: 'req_123',
};

function client(): PayZu {
  return testClient(server);
}

function assertPayZuError(error: unknown): PayZuError {
  assert.ok(error instanceof PayZuError);
  return error;
}

test('erro 400 da API vira PayZuError com status, code, requestId e body', async () => {
  server.enqueue(jsonFixture(400, apiError));
  await assert.rejects(client().pix.create({ amount: 0.5 }), (error: unknown) => {
    const payzuError = assertPayZuError(error);
    assert.equal(payzuError.message, 'Valor mínimo do depósito é R$ 1,00.');
    assert.equal(payzuError.status, 400);
    assert.equal(payzuError.code, 'PZA100');
    assert.equal(payzuError.requestId, 'req_123');
    assert.deepEqual(payzuError.body, apiError);
    return true;
  });
});

test('sem errorCode o code cai para o campo error', async () => {
  server.enqueue(jsonFixture(401, { statusCode: 401, error: 'Unauthorized', message: 'Token inválido.' }));
  await assert.rejects(client().account.balance(), (error: unknown) => {
    const payzuError = assertPayZuError(error);
    assert.equal(payzuError.code, 'Unauthorized');
    assert.equal(payzuError.status, 401);
    return true;
  });
});

test('body não-JSON usa a mensagem padrão em pt-BR', async () => {
  server.enqueue({ status: 502, headers: { 'content-type': 'text/html' }, body: '<html>bad gateway</html>' });
  await assert.rejects(client().account.balance(), (error: unknown) => {
    const payzuError = assertPayZuError(error);
    assert.equal(payzuError.message, 'A API PayZu retornou o status 502.');
    assert.equal(payzuError.status, 502);
    assert.equal(payzuError.body, undefined);
    return true;
  });
});

test('falha de rede vira PayZuError com code NETWORK_ERROR', async () => {
  const offline = new PayZu({ token: 'test-token', baseUrl: 'http://127.0.0.1:1/v1' });
  await assert.rejects(offline.account.balance(), (error: unknown) => {
    const payzuError = assertPayZuError(error);
    assert.equal(payzuError.code, 'NETWORK_ERROR');
    assert.equal(payzuError.message, 'Falha de rede ao comunicar com a API PayZu.');
    return true;
  });
});

test('resposta 200 com JSON inválido vira PayZuError com code UNKNOWN_ERROR', async () => {
  server.enqueue({ status: 200, headers: { 'content-type': 'application/json' }, body: '{invalido' });
  await assert.rejects(client().account.balance(), (error: unknown) => {
    const payzuError = assertPayZuError(error);
    assert.equal(payzuError.code, 'UNKNOWN_ERROR');
    assert.equal(payzuError.message, 'Erro inesperado ao comunicar com a API PayZu.');
    return true;
  });
});
