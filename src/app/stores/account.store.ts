import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { AccountModel } from "../models";

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'account', resettable: true })
export class AccountStore extends Store<AccountModel> {
  constructor() {
    const defaults: AccountModel = {
        id: null,
        username: null,
        name: null,
        email: null,
        phone: null,
        website: null,
        address: null,
        company: null
    };
    super(defaults);
  }

  public setAccount(account: AccountModel): void {
    console.log(account);
    this.update(account);
  }
}
