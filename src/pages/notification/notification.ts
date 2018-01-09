import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-noti',
  templateUrl: 'notification.html'
})
export class NotiPage {
  noti: string = "event";
  isAndroid: boolean = false;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
