import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostStore } from '../stores';
import { PostModel } from '../models';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(
        private http: HttpClient,
        private postStore: PostStore) { }

    public getPostList(): Observable<any> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
            tap((response: PostModel) => {
                this.postStore.update(response);
            }))
    }
}