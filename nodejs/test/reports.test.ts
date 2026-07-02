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

test('reports.create envia POST /user/report com datas em ISO', async () => {
  server.enqueue(jsonFixture(200, { id: 'rep_1', status: 'PROCESSING', createdAt: CREATED_AT }));
  const job = await client().reports.create({
    dateFrom: new Date('2026-06-01T00:00:00.000Z'),
    dateTo: new Date('2026-06-07T00:00:00.000Z'),
    type: ['DEPOSIT'],
  });
  assertRoute(server.lastRequest(), 'POST', '/v1/user/report');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), {
    dateFrom: '2026-06-01T00:00:00.000Z',
    dateTo: '2026-06-07T00:00:00.000Z',
    type: ['DEPOSIT'],
  });
  assert.equal(job.id, 'rep_1');
  assert.ok(job.createdAt instanceof Date);
  assert.equal(job.createdAt.toISOString(), CREATED_AT);
});

test('reports.get consulta GET /user/report/{id}', async () => {
  server.enqueue(jsonFixture(200, { id: 'rep_1', status: 'COMPLETED', createdAt: CREATED_AT }));
  const job = await client().reports.get('rep_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/report/rep_1');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(job.status, 'COMPLETED');
  assert.ok(job.createdAt instanceof Date);
});

test('reports.list consulta GET /user/report com filtros', async () => {
  server.enqueue(jsonFixture(200, { total: 1, pages: 1, reports: [{ id: 'rep_1', status: 'COMPLETED' }] }));
  const list = await client().reports.list({ page: 1, limit: 10 });
  assertRoute(server.lastRequest(), 'GET', '/v1/user/report');
  assertQuery(server.lastRequest(), { page: '1', limit: '10' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(list.total, 1);
  assert.equal(list.reports?.[0]?.id, 'rep_1');
});

test('reports.download envia POST /user/report/{id}/download', async () => {
  server.enqueue(jsonFixture(200, { url: 'https://storage.exemplo.com.br/rep_1.csv', expiresAt: CREATED_AT }));
  const download = await client().reports.download('rep_1');
  assertRoute(server.lastRequest(), 'POST', '/v1/user/report/rep_1/download');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(download.url, 'https://storage.exemplo.com.br/rep_1.csv');
  assert.ok(download.expiresAt instanceof Date);
});

test('reports.transactions consulta GET /user/transactions com filtros', async () => {
  server.enqueue(jsonFixture(200, { total: 1, pages: 1, transactions: [{ id: 'tx_1', status: 'COMPLETED' }] }));
  const list = await client().reports.transactions({ status: 'COMPLETED', limit: 5 });
  assertRoute(server.lastRequest(), 'GET', '/v1/user/transactions');
  assertQuery(server.lastRequest(), { status: 'COMPLETED', limit: '5' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(list.transactions?.[0]?.id, 'tx_1');
});

test('reports.transaction consulta GET /user/transactions/{id}', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_1', status: 'COMPLETED', amount: 99.9 }));
  const detail = await client().reports.transaction('tx_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/transactions/tx_1');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(detail.amount, 99.9);
});
