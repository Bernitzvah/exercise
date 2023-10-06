import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountModel, PostModel } from 'src/app/models';

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
  showFirstSnakbar: EventEmitter<boolean>;

  constructor() {
    this.showFirstSnakbar = new EventEmitter<boolean>();
  }


  public showFirst(event: boolean): void {
    this.showFirstSnakbar.emit(event);
  }

}
