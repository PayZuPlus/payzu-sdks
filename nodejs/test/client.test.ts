import assert from 'node:assert/strict';
import { test } from 'node:test';
import { BASE_PATH, PayZu, PayZuError } from '../src/index.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer } from './support/test-client.js';

const server = createTestServer();

function jsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } });
}

test('sem baseUrl o cliente usa o BASE_PATH do runtime', async () => {
  const urls: string[] = [];
  const fetchApi: typeof fetch = async (input) => {
    urls.push(String(input));
    return jsonResponse({ balanceAvailable: 1 });
  };
  const payzu = new PayZu({ token: 'test-token', fetchApi });
  await payzu.account.balance();
  assert.equal(urls[0], `${BASE_PATH}/user/balance`);
});

test('baseUrl informado substitui o endpoint padrão', async () => {
  server.enqueue(jsonFixture(200, { balanceAvailable: 1 }));
  const payzu = new PayZu({ token: 'test-token', baseUrl: server.baseUrl() });
  await payzu.account.balance();
  assert.equal(server.lastRequest().url, '/v1/user/balance');
});

test('token via provider assíncrono é resolvido a cada chamada', async () => {
  server.enqueue(jsonFixture(200, { balanceAvailable: 1 }));
  const payzu = new PayZu({ token: async () => 'provider-token', baseUrl: server.baseUrl() });
  await payzu.account.balance();
  assert.equal(server.lastRequest().headers.authorization, 'Bearer provider-token');
});

test('token vazio lança MISSING_TOKEN com mensagem em pt-BR', () => {
  assert.throws(
    () => new PayZu({ token: '   ' }),
    (error: unknown) => {
      assert.ok(error instanceof PayZuError);
      assert.equal(error.code, 'MISSING_TOKEN');
      assert.equal(error.message, 'Informe o token de acesso da API PayZu.');
      return true;
    },
  );
});

test('token vazio do provider assíncrono preserva MISSING_TOKEN', async () => {
  const payzu = new PayZu({ token: async () => '', baseUrl: server.baseUrl() });
  await assert.rejects(
    () => payzu.account.balance(),
    (error: unknown) => {
      assert.ok(error instanceof PayZuError);
      assert.equal(error.code, 'MISSING_TOKEN');
      return true;
    },
  );
});
