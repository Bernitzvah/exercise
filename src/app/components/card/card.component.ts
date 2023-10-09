import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimationDirective } from 'src/app/directives/animation.directive';
import { AccountModel, NotificationModel, PostModel, UserInfoModel } from 'src/app/models';
import { AccountQuery, PostQuery } from 'src/app/queries';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  users: AccountModel[] | undefined;
  @Input()
  usersPost: PostModel[] | undefined;
  @Output()
  showSnackbar: EventEmitter<NotificationModel>;
  @Output()
  public userInfo: EventEmitter<UserInfoModel>;

  @ViewChildren(AnimationDirective) items: QueryList<AnimationDirective> | undefined;
  public itemAdd: any;

  private postSubscription: Subscription | undefined;
  private firstPosition: AccountModel | undefined;
  private secondPosition: AccountModel | undefined;
  private thirdPosition: AccountModel | undefined;
  private randomId: number;

  constructor(
    private postQuery: PostQuery,
    private accountQuery: AccountQuery
  ) {
    this.showSnackbar = new EventEmitter<NotificationModel>();
    this.userInfo = new EventEmitter<UserInfoModel>();
    this.randomId = -1;
  }

  ngOnInit(): void {
    this.postSubscription = this.postQuery.posts$.subscribe((value: PostModel[]) => {
      if (this.users) {
        this.randomId = this.accountQuery.getFakeId();
        const totalPost = this.countUserPosts(this.randomId);
        this.users = this.users.map(x => ({ item: x, value: this.countUserPosts(x.id) })).sort((a, b) => a.value > b.value ? -1 : 1).map(x => x.item)
        const notify: NotificationModel = { subject: '', text: '', color: '' };
        if (this.firstPosition != this.users[0]) {
          this.firstPosition = this.users[0];
          notify.subject = this.users[0].name;
          notify.text = ' é in testa!'
          notify.color = 'var(--color-blue)'
          this.showSnackbar.emit(notify);
          if (this.items) {
            this.items.forEach(x => x.animateGo())
          }
          const pos = this.users.findIndex(x => x.id == this.randomId) + 1;
          const name = this.users.find(x => x.id == this.randomId)?.name;
          const model: UserInfoModel = { id: this.randomId, name: name ? name : '', position: pos, postNumber: totalPost, preDetach: 0, postDetach: 0 };
          this.userInfo.emit(model);
          return;
        }
        if (this.secondPosition != this.users[1]) {
          this.secondPosition = this.users[1];
          notify.subject = this.users[1].name;
          notify.text = ' é in seconda posizione!'
          notify.color = 'var(--color-yellow)'
          this.showSnackbar.emit(notify);
          if (this.items) {
            this.items.forEach(x => x.animateGo())
          }
          const pos = this.users.findIndex(x => x.id == this.randomId) + 1;
          const name = this.users.find(x => x.id == this.randomId)?.name;
          const model: UserInfoModel = { id: this.randomId, name: name ? name : '', position: pos, postNumber: totalPost, preDetach: 0, postDetach: 0 };
          this.userInfo.emit(model);
          return;
        }
        if (this.thirdPosition != this.users[2]) {
          this.thirdPosition = this.users[2];
          notify.subject = this.users[2].name;
          notify.text = ' é in arrivato terzo!'
          notify.color = 'var(--color-violet)'
          this.showSnackbar.emit(notify);
          if (this.items) {
            this.items.forEach(x => x.animateGo())
          }
          const pos = this.users.findIndex(x => x.id == this.randomId) + 1;
          const name = this.users.find(x => x.id == this.randomId)?.name;
          const model: UserInfoModel = { id: this.randomId, name: name ? name : '', position: pos, postNumber: totalPost, preDetach: 0, postDetach: 0 };
          this.userInfo.emit(model);
          return;
        }
        const pos = this.users.findIndex(x => x.id == this.randomId) + 1;
        const name = this.users.find(x => x.id == this.randomId)?.name;
        const model: UserInfoModel = { id: this.randomId, name: name ? name : '', position: pos, postNumber: totalPost, preDetach: 0, postDetach: 0 };
        this.userInfo.emit(model);
        if (this.items) {
          this.items.forEach(x => x.animateGo())
        }
      }
    })
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
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
