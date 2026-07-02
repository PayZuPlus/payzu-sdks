export interface PayZuErrorDetails {
  readonly status?: number;
  readonly code?: string;
  readonly requestId?: string;
  readonly body?: unknown;
  readonly cause?: unknown;
}

export class PayZuError extends Error {
  override readonly name = 'PayZuError';
  readonly status?: number;
  readonly code?: string;
  readonly requestId?: string;
  readonly body?: unknown;
  readonly cause?: unknown;

  constructor(message: string, details: PayZuErrorDetails = {}) {
    super(message);
    this.status = details.status;
    this.code = details.code;
    this.requestId = details.requestId;
    this.body = details.body;
    this.cause = details.cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
