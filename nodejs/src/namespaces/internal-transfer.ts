import type { InternalTransferApi, Transaction } from '../generated/index.js';
import { invoke, withJsonMediaType } from '../http.js';
import type { CreateInternalTransferParams, GetInternalTransferParams } from '../types.js';

export class InternalTransferNamespace {
  constructor(private readonly api: InternalTransferApi) {}

  create(params: CreateInternalTransferParams): Promise<Transaction> {
    return invoke(() => this.api.postInternalTransfer({ postInternalTransferRequest: params }));
  }

  get(params: GetInternalTransferParams): Promise<Transaction> {
    return invoke(() => this.api.getInternalTransfer(withJsonMediaType(params)));
  }
}
