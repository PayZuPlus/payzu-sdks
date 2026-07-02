import { createServer, type IncomingHttpHeaders, type IncomingMessage, type ServerResponse } from 'node:http';

export interface MockFixture {
  readonly status: number;
  readonly headers?: Record<string, string>;
  readonly body?: string | Buffer;
}

export interface RecordedRequest {
  readonly method: string;
  readonly url: string;
  readonly headers: IncomingHttpHeaders;
  readonly body: Buffer;
}

export function jsonFixture(status: number, body: unknown): MockFixture {
  return { status, headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) };
}

export class MockServer {
  private readonly fixtures: MockFixture[] = [];
  readonly requests: RecordedRequest[] = [];
  private readonly server = createServer((request, response) => this.handle(request, response));

  async start(): Promise<void> {
    await new Promise<void>((resolve) => this.server.listen(0, '127.0.0.1', resolve));
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) =>
      this.server.close((error) => (error === undefined ? resolve() : reject(error))),
    );
  }

  reset(): void {
    this.fixtures.length = 0;
    this.requests.length = 0;
  }

  enqueue(fixture: MockFixture): void {
    this.fixtures.push(fixture);
  }

  baseUrl(): string {
    const address = this.server.address();
    if (address === null || typeof address === 'string') {
      throw new Error('Servidor de teste não iniciado.');
    }
    return `http://127.0.0.1:${address.port}/v1`;
  }

  lastRequest(): RecordedRequest {
    const request = this.requests[this.requests.length - 1];
    if (request === undefined) {
      throw new Error('Nenhuma requisição registrada.');
    }
    return request;
  }

  private handle(request: IncomingMessage, response: ServerResponse): void {
    const chunks: Buffer[] = [];
    request.on('data', (chunk: Buffer) => chunks.push(chunk));
    request.on('error', () => {
      response.writeHead(400).end();
    });
    request.on('end', () => {
      this.requests.push({
        method: request.method ?? '',
        url: request.url ?? '',
        headers: request.headers,
        body: Buffer.concat(chunks),
      });
      this.respond(response);
    });
  }

  private respond(response: ServerResponse): void {
    const fixture = this.fixtures.shift() ?? jsonFixture(500, { message: 'Fixture ausente no teste.' });
    response.writeHead(fixture.status, fixture.headers ?? {});
    response.end(fixture.body ?? '');
  }
}
