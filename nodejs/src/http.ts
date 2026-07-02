import { FetchError, RequiredError, ResponseError } from './generated/runtime.js';
import { PayZuError } from './errors.js';

const JSON_MEDIA_TYPE: 'application/json' = 'application/json';

export function withJsonMediaType<T>(params: T): T & { contentType: 'application/json' } {
  return { ...params, contentType: JSON_MEDIA_TYPE };
}

export async function invoke<T>(operation: () => Promise<T>): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    throw await translate(error);
  }
}

async function translate(error: unknown): Promise<PayZuError> {
  if (error instanceof PayZuError) {
    return error;
  }
  if (error instanceof ResponseError) {
    return fromResponse(error.response, error);
  }
  if (error instanceof FetchError) {
    return new PayZuError('Falha de rede ao comunicar com a API PayZu.', { code: 'NETWORK_ERROR', cause: error });
  }
  if (error instanceof RequiredError) {
    return new PayZuError(`Parâmetro obrigatório ausente: ${error.field}.`, { code: 'INVALID_REQUEST', cause: error });
  }
  return new PayZuError('Erro inesperado ao comunicar com a API PayZu.', { code: 'UNKNOWN_ERROR', cause: error });
}

async function fromResponse(response: Response, cause: ResponseError): Promise<PayZuError> {
  const status = response.status;
  const body = await readBody(response);
  const fields = isRecord(body) ? body : {};
  const message = readString(fields['message']) ?? `A API PayZu retornou o status ${status}.`;
  return new PayZuError(message, {
    status,
    code: readString(fields['errorCode']) ?? readString(fields['error']),
    requestId: readString(fields['requestId']),
    body,
    cause,
  });
}

async function readBody(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}
