import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as clone from 'clone';
import { Subscription, TimeInterval } from 'rxjs';
import { AccountModel, PostModel } from 'src/app/models';
import { AccountQuery } from 'src/app/queries';
import { PostQuery } from 'src/app/queries/post.query';
import { PostService } from 'src/app/services/post.service';
import { AccountStore, PostStore } from 'src/app/stores';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy {

  public users: AccountModel[] | undefined;
  public usersPosts: PostModel[] | undefined;

  private postSubscription: Subscription | undefined;
  private userSubscription: Subscription | undefined;

  private interval: any;

  constructor(
    private accountStore: AccountStore,
    private accountQuery: AccountQuery,
    private postService: PostService,
    private postStore: PostStore,
    private postQuery: PostQuery,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.users = this.accountQuery.getValue().users;
    if (!this.postQuery.getPosts()?.length || this.postQuery.getPosts()?.length <= 0) {
      this.postService.getPostList().subscribe(res => {
        this.usersPosts = res;
      });
    } else {
      this.usersPosts = this.postQuery.getPosts();
    }
    this.interval = setInterval(() => {
      this.addPost();
      console.log('add')
    }, 100);
    this.postSubscription = this.postQuery.posts$.subscribe((value: PostModel[]) => {
      this.usersPosts = value;
    });

    this.userSubscription = this.accountQuery.users$.subscribe((value: AccountModel[]) => {
      this.users = value;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.userSubscription?.unsubscribe();
    this.postSubscription?.unsubscribe();
  }

  public Logout(): void {
    this.accountStore.reset();
    this.postStore.reset();
    this.router.navigate(['/login']);
  }

  public addPost(): void {
    const random = this.getRandomUserId();
    const body = this.usersPosts ? this.usersPosts[random].body : 'www';

    var post: PostModel = { userId: random, body: (body + ''+ body + ''+ body + ''+ body), id: "1", title: ""};
    var temp = clone(this.usersPosts);
    temp?.push(post);
    this.usersPosts = temp;
    this.postStore.update({ posts: temp });
  }

  private getRandomUserId(): number {
    var usersNumber = this.users?.length ? this.users?.length + 1 : 0;
    var random = Math.floor(Math.random() * usersNumber)
    if (random == 0) {
      random = 1;
    }
    return random;
  }

  public countUserPosts(userId: number): number {
    let res = 0;
    this.usersPosts?.forEach((value) => {
      if (value.userId === userId) {
        res++;
      }
    });
    return res;
  }
}
