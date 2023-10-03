import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpClient) { }

    public getUsersList(): Observable<any | null> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
            tap((response) => {console.log(response)}))
    }
}