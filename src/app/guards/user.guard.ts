import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AccountQuery } from "../queries";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(
    private accountQuery: AccountQuery
  ) {}

  canActivate(): boolean  {
      const isAuthenticated = this.accountQuery.getAccounts().length > 0;

      return isAuthenticated;
  }
}
