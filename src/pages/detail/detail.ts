import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  ImageArray: any = [];
  constructor(public navCtrl: NavController) {
    this.ImageArray = [
      {'image':'../../assets/imgs/GUCCI-eyewear-banner1.jpg'},
      {'image':'../../assets/imgs/hm-philippines-10142013.jpg'},
      {'image':'../../assets/imgs/Zara-Banner.jpg'}
    ]
  }

}
