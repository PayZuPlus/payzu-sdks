import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu } from '../src/index.js';
import {
  assertBearerToken,
  assertJsonBody,
  assertJsonMediaTypeWhenPresent,
  assertQuery,
  assertRoute,
} from './support/asserts.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer, testClient } from './support/test-client.js';

const server = createTestServer();

function client(): PayZu {
  return testClient(server);
}

test('withdraw.create envia POST /withdraw com o corpo exato', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_2', status: 'PENDING' }));
  const transaction = await client().withdraw.create({
    amount: 50,
    pixKey: 'financeiro@exemplo.com.br',
    pixType: 'email',
    description: 'Saque diário',
  });
  assertRoute(server.lastRequest(), 'POST', '/v1/withdraw');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), {
    amount: 50,
    pixKey: 'financeiro@exemplo.com.br',
    pixType: 'email',
    description: 'Saque diário',
  });
  assert.equal(transaction.id, 'tx_2');
});

test('withdraw.get consulta GET /withdraw pelos parâmetros informados', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_2', status: 'COMPLETED' }));
  const transaction = await client().withdraw.get({ endToEndId: 'E00000000202607021200abcdef12345' });
  assertRoute(server.lastRequest(), 'GET', '/v1/withdraw');
  assertQuery(server.lastRequest(), { endToEndId: 'E00000000202607021200abcdef12345' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(transaction.status, 'COMPLETED');
});

test('withdraw.proof busca GET /withdraw/proof/{id}', async () => {
  server.enqueue(jsonFixture(200, { base64: 'JVBERi0=' }));
  const proof = await client().withdraw.proof('tx_2');
  assertRoute(server.lastRequest(), 'GET', '/v1/withdraw/proof/tx_2');
  assertQuery(server.lastRequest(), {});
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(proof.base64, 'JVBERi0=');
});

test('withdraw.fromQrCode envia POST /withdraw/qrcode com o corpo exato', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_3', status: 'PENDING' }));
  const transaction = await client().withdraw.fromQrCode({ qrCode: '00020126QRDEMO', amount: 10 });
  assertRoute(server.lastRequest(), 'POST', '/v1/withdraw/qrcode');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), { qrCode: '00020126QRDEMO', amount: 10 });
  assert.equal(transaction.id, 'tx_3');
});

test('withdraw.readQrCode envia POST /pix/qrcode/read com o emv', async () => {
  server.enqueue(jsonFixture(200, { qrCodeType: 'static', amount: 25.5, name: 'Loja Exemplo' }));
  const read = await client().withdraw.readQrCode('00020126QRDEMO');
  assertRoute(server.lastRequest(), 'POST', '/v1/pix/qrcode/read');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), { emv: '00020126QRDEMO' });
  assert.equal(read.amount, 25.5);
  assert.equal(read.name, 'Loja Exemplo');
});

test('withdraw.pixKey consulta GET /pix/key', async () => {
  server.enqueue(jsonFixture(200, { pixKey: 'financeiro@exemplo.com.br', name: 'Fulano', institutionName: 'Banco X' }));
  const info = await client().withdraw.pixKey('financeiro@exemplo.com.br');
  assertRoute(server.lastRequest(), 'GET', '/v1/pix/key');
  assertQuery(server.lastRequest(), { pixKey: 'financeiro@exemplo.com.br' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(info.name, 'Fulano');
});
