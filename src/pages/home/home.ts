import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ImageArray: any = [];

  constructor(public navCtrl: NavController) {
      this.ImageArray = [
        {'image':'../../assets/imgs/GUCCI-eyewear-banner1.jpg'},
        {'image':'../../assets/imgs/hm-philippines-10142013.jpg'},
        {'image':'../../assets/imgs/Zara-Banner.jpg'}
        ]
  }

}
