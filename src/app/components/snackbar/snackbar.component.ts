import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/models';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less']
})
export class SnackbarComponent implements OnInit {

  @Input()
  notification: NotificationModel | undefined;

  constructor() {}

  ngOnInit(): void {
  }

}
