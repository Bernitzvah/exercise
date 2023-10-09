import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { AccountModel } from "../models";

export interface AccountState extends EntityState<AccountModel> {
  users: AccountModel[];
  fakeId: number;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'accounts', resettable: true })
export class AccountStore extends EntityStore<AccountState> {
  constructor() {
    super();
  }
}
