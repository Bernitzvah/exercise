import { Component, Input } from '@angular/core';
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

  constructor() {
  }
}
