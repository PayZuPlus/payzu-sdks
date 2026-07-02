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
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function client(): PayZu {
  return testClient(server);
}

test('pix.create envia POST /pix com o corpo exato e retorna a transação', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_1', status: 'PENDING', amount: 99.9 }));
  const transaction = await client().pix.create({
    amount: 99.9,
    clientReference: 'order-1',
    callbackUrl: 'https://loja.exemplo.com.br/webhook',
  });
  assertRoute(server.lastRequest(), 'POST', '/v1/pix');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), {
    amount: 99.9,
    callbackUrl: 'https://loja.exemplo.com.br/webhook',
    clientReference: 'order-1',
  });
  assert.equal(transaction.id, 'tx_1');
  assert.equal(transaction.status, 'PENDING');
});

test('pix.get consulta GET /pix pelos parâmetros informados', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_1', status: 'COMPLETED' }));
  const transaction = await client().pix.get({ id: 'tx_1' });
  assertRoute(server.lastRequest(), 'GET', '/v1/pix');
  assertQuery(server.lastRequest(), { id: 'tx_1' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(transaction.status, 'COMPLETED');
});

test('pix.qrCode baixa o PNG como Blob', async () => {
  server.enqueue({ status: 200, headers: { 'content-type': 'image/png' }, body: PNG_SIGNATURE });
  const blob = await client().pix.qrCode('tx_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/pix/qr-code/tx_1');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.ok(blob instanceof Blob);
  assert.deepEqual(Buffer.from(await blob.arrayBuffer()), PNG_SIGNATURE);
});

test('pix.proof busca GET /proof/{id} com o formato pedido', async () => {
  server.enqueue(jsonFixture(200, { base64: 'JVBERi0=' }));
  const proof = await client().pix.proof('tx_1', { type: 'pdf' });
  assertRoute(server.lastRequest(), 'GET', '/v1/proof/tx_1');
  assertQuery(server.lastRequest(), { type: 'pdf' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(proof.base64, 'JVBERi0=');
});
