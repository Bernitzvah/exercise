import { Injectable } from "@angular/core";
import { EntityState, EntityStore, Store, StoreConfig } from "@datorama/akita";
import { AccountModel } from "../models";

export interface AccountState extends EntityState<AccountModel> {
  id: null;
  username: null;
  name: null;
  email: null;
  phone: null;
  website: null;
  address: null;
  company: null;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'accounts', resettable: true })
export class AccountStore extends EntityStore<AccountState> {
  constructor() {
    super();
  }
}
