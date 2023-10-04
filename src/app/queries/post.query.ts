import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PostState, PostStore } from '../stores';
import { PostModel } from '../models';

@Injectable({ providedIn: 'root' })
export class PostQuery extends QueryEntity<PostState> {
  public posts$: Observable<PostModel[]>;

  constructor(
    protected postStore: PostStore
  ) {
    super(postStore);
    this.posts$ = this.select(state => state.posts);
  }

  public getPosts(): PostModel[] {
    return this.getValue().posts;
  }

}
