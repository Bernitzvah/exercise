import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostStore } from '../stores';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(
        private http: HttpClient,
        private postStore: PostStore) { }

    public getUsersList(): Observable<any | null> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
            tap((response) => {
                this.postStore.update({ posts: response });
            }))
    }
}