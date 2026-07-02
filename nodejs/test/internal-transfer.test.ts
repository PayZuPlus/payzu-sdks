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

test('internalTransfer.create envia POST /internal-transfer com o corpo exato', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_5', status: 'COMPLETED' }));
  const transaction = await client().internalTransfer.create({
    payerAccountNumber: '150001',
    receiverAccountNumber: '150002',
    amount: 10,
    clientReference: 'transfer-1',
  });
  assertRoute(server.lastRequest(), 'POST', '/v1/internal-transfer');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), {
    payerAccountNumber: '150001',
    receiverAccountNumber: '150002',
    amount: 10,
    clientReference: 'transfer-1',
  });
  assert.equal(transaction.id, 'tx_5');
});

test('internalTransfer.get consulta GET /internal-transfer pelos parâmetros informados', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_5', status: 'COMPLETED' }));
  const transaction = await client().internalTransfer.get({ clientReference: 'transfer-1' });
  assertRoute(server.lastRequest(), 'GET', '/v1/internal-transfer');
  assertQuery(server.lastRequest(), { clientReference: 'transfer-1' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(transaction.status, 'COMPLETED');
});
