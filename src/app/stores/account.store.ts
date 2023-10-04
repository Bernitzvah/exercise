import { Injectable } from "@angular/core";
import { EntityState, EntityStore, Store, StoreConfig } from "@datorama/akita";
import { AccountModel } from "../models";

export interface AccountState extends EntityState<AccountModel> {
  users: AccountModel[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'accounts', resettable: true })
export class AccountStore extends EntityStore<AccountState> {
  constructor() {
    super();
  }
}
