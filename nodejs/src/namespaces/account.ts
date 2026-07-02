import type { AccountApi } from '../generated/index.js';
import { invoke } from '../http.js';
import type { Account, Balance } from '../types.js';

export class AccountNamespace {
  constructor(private readonly api: AccountApi) {}

  get(): Promise<Account> {
    return invoke(() => this.api.getUser());
  }

  balance(): Promise<Balance> {
    return invoke(() => this.api.getUserBalance());
  }
}
