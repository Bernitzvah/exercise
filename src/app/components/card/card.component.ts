import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimationDirective } from 'src/app/directives/animation.directive';
import { AccountModel, PostModel } from 'src/app/models';
import { PostQuery } from 'src/app/queries';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input()
  users: AccountModel[] | undefined;
  @Input()
  usersPost: PostModel[] | undefined;
  @Output()
  showFirstSnakbar: EventEmitter<boolean>;

  @ViewChildren(AnimationDirective) items: QueryList<AnimationDirective> | undefined;
  public itemAdd: any;

  private postSubscription: Subscription | undefined;
  private userSubscription: Subscription | undefined;
  private firstPosition: AccountModel | undefined;

  constructor(
    private postQuery: PostQuery,
  ) {
    this.showFirstSnakbar = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.postSubscription = this.postQuery.posts$.subscribe((value: PostModel[]) => {
      if(this.users){
        this.users = this.users.map(x => ({ item: x, value: this.countUserPosts(x.id) })).sort((a, b) => a.value > b.value ? -1 : 1).map(x => x.item)
        if(this.firstPosition != this.users[0]) {
          this.firstPosition = this.users[0];
          this.showFirstSnakbar.emit(true);
        }
      }
      if (this.items){
        this.items.forEach(x => x.animateGo())
      }
    })
  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

  public countUserPosts(userId: number): number {
    let res = 0;
    this.usersPost?.forEach((value) => {
      if (value.userId === userId) {
        res++;
      }
    });
    return res;
  }

  public getLastPost(id: number): string | null {
    const arrKeys = this.usersPost?.map(el => el.userId);
    var s = arrKeys?.lastIndexOf(id);
    const result = (s && this.usersPost?.length) ? this.usersPost[s].body : '';
    return result;
  }
}
