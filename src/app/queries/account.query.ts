import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AccountStore } from '../stores';
import { AccountModel } from '../models';

@Injectable({ providedIn: 'root' })
export class AccountQuery extends Query<AccountModel> {
  public user$: Observable<AccountModel>;

  constructor(
    protected accountStore: AccountStore
  ) {
    super(accountStore);
    this.user$ = this.select();
  }

}
