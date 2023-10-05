import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimationDirective } from 'src/app/directives/animation.directive';
import { AccountModel, PostModel } from 'src/app/models';
import { AccountQuery, PostQuery } from 'src/app/queries';

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

  @ViewChildren(AnimationDirective) items: QueryList<AnimationDirective> | undefined;
  public itemAdd: any;

  private postSubscription: Subscription | undefined;
  private userSubscription: Subscription | undefined;

  constructor(
    private postQuery: PostQuery,
    private userQuery: AccountQuery
  ) { }

  ngOnInit(): void {
    this.postSubscription = this.postQuery.posts$.subscribe((value: PostModel[]) => {
      if(this.users)
      this.users = this.users.map(x => ({ item: x, value: this.countUserPosts(x.id) })).sort((a, b) => a.value > b.value ? -1 : 1).map(x => x.item)
    
      if (this.items){
        this.items.forEach(x => x.animateGo())
      }

      if (this.users)
      for (let i=0;i<this.users.length;i++){
        console.log('xxxxxc', this.users[i].name, this.countUserPosts(this.users[i].id));
      }
      console.log('------------------------------------------------------------------', );

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
