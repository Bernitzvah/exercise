import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotificationModel } from 'src/app/models';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(200)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({opacity: 0})))
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
    if (changes['notification'].currentValue.text.length > 0)
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
