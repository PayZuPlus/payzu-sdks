import assert from 'node:assert/strict';
import type { RecordedRequest } from './mock-server.js';

export function assertRoute(request: RecordedRequest, method: string, pathname: string): void {
  const url = new URL(request.url, 'http://localhost');
  assert.equal(request.method, method);
  assert.equal(url.pathname, pathname);
}

export function assertQuery(request: RecordedRequest, expected: Record<string, string>): void {
  const url = new URL(request.url, 'http://localhost');
  const actual = Object.fromEntries(url.searchParams.entries());
  assert.deepEqual(actual, expected);
}

export function assertBearerToken(request: RecordedRequest): void {
  assert.equal(request.headers.authorization, 'Bearer test-token');
}

export function assertJsonMediaTypeWhenPresent(request: RecordedRequest): void {
  const contentType = request.headers['content-type'];
  if (contentType !== undefined) {
    assert.match(String(contentType), /application\/json/);
  }
}

export function assertJsonBody(request: RecordedRequest, expected: unknown): void {
  assert.match(String(request.headers['content-type']), /application\/json/);
  assert.deepEqual(JSON.parse(request.body.toString('utf8')), expected);
}
