import { after, before, beforeEach } from 'node:test';
import { PayZu } from '../../src/index.js';
import { MockServer } from './mock-server.js';

export function createTestServer(): MockServer {
  const server = new MockServer();
  before(() => server.start());
  after(() => server.stop());
  beforeEach(() => server.reset());
  return server;
}

export function testClient(server: MockServer): PayZu {
  return new PayZu({ token: 'test-token', baseUrl: server.baseUrl() });
}
