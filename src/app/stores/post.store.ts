import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { PostModel } from "../models";

export interface PostState extends EntityState<PostModel> {
  posts: PostModel[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts', resettable: true })
export class PostStore extends EntityStore<PostState> {
  constructor() {
    super();
  }
}
