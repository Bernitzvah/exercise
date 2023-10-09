import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountModel, NotificationModel, PostModel, UserInfoModel } from 'src/app/models';

@Component({
  selector: 'app-general-ranking',
  templateUrl: './general-ranking.component.html',
  styleUrls: ['./general-ranking.component.less']
})
export class GeneralRankingComponent {
  @Input()
  users: AccountModel[] | undefined;
  @Input()
  usersPost: PostModel[] | undefined;
  @Input()
  userInfo: UserInfoModel | undefined;

  @Output()
  showSnackbar: EventEmitter<NotificationModel>;
  @Output()
  userInfoState: EventEmitter<UserInfoModel>;

  constructor() {
    this.showSnackbar = new EventEmitter<NotificationModel>();
    this.userInfoState = new EventEmitter<UserInfoModel>();
  }

  public setUserInfo(event: UserInfoModel): void {
    this.userInfoState.emit(event);
  }


  public showFirst(event: NotificationModel): void {
    this.showSnackbar.emit(event);
  }

}
