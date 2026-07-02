import { BASE_PATH, Configuration, type FetchAPI } from './generated/runtime.js';
import { PayZuError } from './errors.js';

export type TokenProvider = () => string | Promise<string>;

export interface PayZuOptions {
  readonly token: string | TokenProvider;
  readonly baseUrl?: string;
  readonly fetchApi?: FetchAPI;
}

export function createConfiguration(options: PayZuOptions): Configuration {
  return new Configuration({
    basePath: normalizeBaseUrl(options.baseUrl ?? BASE_PATH),
    fetchApi: options.fetchApi,
    accessToken: createTokenResolver(options.token),
  });
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith('/') ? normalizeBaseUrl(baseUrl.slice(0, -1)) : baseUrl;
}

function createTokenResolver(token: string | TokenProvider): () => string | Promise<string> {
  if (typeof token === 'function') {
    return async () => requireToken(await token());
  }
  const validated = requireToken(token);
  return () => validated;
}

function requireToken(token: string): string {
  if (typeof token !== 'string' || token.trim() === '') {
    throw new PayZuError('Informe o token de acesso da API PayZu.', { code: 'MISSING_TOKEN' });
  }
  return token;
}
