import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu } from '../src/index.js';
import { assertBearerToken, assertJsonMediaTypeWhenPresent, assertQuery, assertRoute } from './support/asserts.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer, testClient } from './support/test-client.js';

const server = createTestServer();

function client(): PayZu {
  return testClient(server);
}

test('account.get consulta GET /user', async () => {
  server.enqueue(jsonFixture(200, { id: 'usr_1', accountNumber: '150001', name: 'Loja Exemplo', status: 'ACTIVE' }));
  const account = await client().account.get();
  assertRoute(server.lastRequest(), 'GET', '/v1/user');
  assertQuery(server.lastRequest(), {});
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(account.accountNumber, '150001');
  assert.equal(account.name, 'Loja Exemplo');
});

test('account.balance consulta GET /user/balance', async () => {
  server.enqueue(jsonFixture(200, { balanceAvailable: 1234.56, balanceBlocked: 10 }));
  const balance = await client().account.balance();
  assertRoute(server.lastRequest(), 'GET', '/v1/user/balance');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(balance.balanceAvailable, 1234.56);
  assert.equal(balance.balanceBlocked, 10);
});
