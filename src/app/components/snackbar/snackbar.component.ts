import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NotificationModel } from 'src/app/models';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200)
      ]),
      transition(':leave',
        animate(400, style({ opacity: 0 })))
    ])
  ]
})
export class SnackbarComponent implements OnChanges {

  @Input()
  notification: NotificationModel | undefined;

  notificationList: NotificationModel[];

  constructor() {
    this.notificationList = [];
  }
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['notification'].currentValue && changes['notification'].currentValue.text.length > 0)
      this.notificationList.push(changes['notification'].currentValue);
    if (this.notificationList.length > 0) {
      setTimeout(() => {
        this.removeElement();
      }, 4000);
    }
  }

  private removeElement(): void {
    this.notificationList.shift()
  }

}
