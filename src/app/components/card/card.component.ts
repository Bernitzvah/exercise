import { Component, Input, OnInit } from '@angular/core';
import { AccountModel, PostModel } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input()
  users: AccountModel[] | undefined;
  @Input()
  usersPost: PostModel[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  public countUserPosts(userId: number): number {
    let res = 0;
    this.usersPost?.forEach(function (value) {
      if (value.userId === userId) {
        res++;
      }
  });
    return res;
  }

}
