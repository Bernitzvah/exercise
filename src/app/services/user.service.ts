import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountStore } from '../stores';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(
        private http: HttpClient,
        private accountStore: AccountStore) { }

    public getUsersList(): Observable<any | null> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
            tap((response) => {this.accountStore.setAccount(response)}))
    }
}