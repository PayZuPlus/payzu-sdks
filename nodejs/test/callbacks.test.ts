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
const CREATED_AT = '2026-07-01T10:00:00.000Z';

function client(): PayZu {
  return testClient(server);
}

test('callbacks.list consulta GET /user/callbacks com filtros', async () => {
  server.enqueue(jsonFixture(200, { callbacks: [{ id: 'cb_1', transactionId: 'tx_1' }] }));
  const list = await client().callbacks.list({ transactionId: 'tx_1', hasError: true });
  assertRoute(server.lastRequest(), 'GET', '/v1/user/callbacks');
  assertQuery(server.lastRequest(), { transactionId: 'tx_1', hasError: 'true' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(list.callbacks?.[0]?.id, 'cb_1');
});

test('callbacks.get consulta GET /user/callbacks/{id}', async () => {
  server.enqueue(jsonFixture(200, { id: 'cb_1', status: 200, createdAt: CREATED_AT }));
  const callback = await client().callbacks.get('cb_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/callbacks/cb_1');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(callback.status, 200);
  assert.ok(callback.createdAt instanceof Date);
});

test('callbacks.resend envia POST /user/callbacks/resend/{transactionId}', async () => {
  server.enqueue(jsonFixture(200, { message: 'Callback reenviado' }));
  const result = await client().callbacks.resend('tx_1');
  assertRoute(server.lastRequest(), 'POST', '/v1/user/callbacks/resend/tx_1');
  assertBearerToken(server.lastRequest());
  assert.equal(result.message, 'Callback reenviado');
});

test('callbacks.resendBatch envia POST /user/callbacks/resend com o período em ISO', async () => {
  server.enqueue(jsonFixture(200, { message: 'Reenvio agendado', total: 3 }));
  const result = await client().callbacks.resendBatch({
    createdAtFrom: new Date('2026-06-25T00:00:00.000Z'),
    createdAtTo: new Date('2026-07-01T00:00:00.000Z'),
    transactionTypes: ['DEPOSIT'],
  });
  assertRoute(server.lastRequest(), 'POST', '/v1/user/callbacks/resend');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), {
    createdAtFrom: '2026-06-25T00:00:00.000Z',
    createdAtTo: '2026-07-01T00:00:00.000Z',
    transactionTypes: ['DEPOSIT'],
  });
  assert.equal(result.total, 3);
});
