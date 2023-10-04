import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AccountState, AccountStore } from '../stores';
import { AccountModel } from '../models';

@Injectable({ providedIn: 'root' })
export class AccountQuery extends QueryEntity<AccountState> {
  public user$: Observable<AccountModel[]>;

  constructor(
    protected accountStore: AccountStore
  ) {
    super(accountStore);
    this.user$ = this.select(state => state.users);
  }

  public getAccounts(): AccountModel[]{
    return this.getValue().users;
  }

}
