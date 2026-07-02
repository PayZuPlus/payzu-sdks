import type { PixOperationsApi, Transaction } from '../generated/index.js';
import { invoke, withJsonMediaType } from '../http.js';
import type { CreateChargeParams, GetChargeParams, Proof, ProofOptions } from '../types.js';

export class PixNamespace {
  constructor(private readonly api: PixOperationsApi) {}

  create(params: CreateChargeParams): Promise<Transaction> {
    return invoke(() => this.api.postPix({ postPixRequest: params }));
  }

  get(params: GetChargeParams): Promise<Transaction> {
    return invoke(() => this.api.getPix(withJsonMediaType(params)));
  }

  qrCode(transactionId: string): Promise<Blob> {
    return invoke(() => this.api.getPixQrcode(withJsonMediaType({ transactionId })));
  }

  proof(id: string, options: ProofOptions = {}): Promise<Proof> {
    return invoke(() => this.api.getProof(withJsonMediaType({ id, ...options })));
  }
}
