import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountModel, NotificationModel, PostModel } from 'src/app/models';

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

  @Output()
  showSnackbar: EventEmitter<NotificationModel>;

  constructor() {
    this.showSnackbar = new EventEmitter<NotificationModel>();
  }


  public showFirst(event: NotificationModel): void {
    this.showSnackbar.emit(event);
  }

}
