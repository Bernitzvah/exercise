import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AccountQuery } from "../queries";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountQuery: AccountQuery
  ) {}

  canActivate(): boolean  {
      const isAuthenticated = this.accountQuery.getAccounts().length > 0;
      console.log('lunghezza', this.accountQuery.getAccounts().length);

      return isAuthenticated;
  }
}
