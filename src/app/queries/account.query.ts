import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AccountState, AccountStore } from '../stores';
import { AccountModel } from '../models';

@Injectable({ providedIn: 'root' })
export class AccountQuery extends QueryEntity<AccountState> {
  public users$: Observable<AccountModel[]>;
  public fakeId$: Observable<number>;

  constructor(
    protected accountStore: AccountStore
  ) {
    super(accountStore);
    this.users$ = this.select(state => state.users);
    this.fakeId$ = this.select(state => state['fakeId']);
  }

  public getAccounts(): AccountModel[] {
    return this.getValue().users;
  }

  public getFakeId(): number {
    return this.getValue()['fakeId'];
  }

}
