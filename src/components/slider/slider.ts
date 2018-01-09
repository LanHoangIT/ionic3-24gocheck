import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {

  ImageArray: any = [];

  constructor(public navCtrl: NavController) {
    this.ImageArray = [
      {'image':'../../assets/imgs/GUCCI-eyewear-banner1.jpg'},
      {'image':'../../assets/imgs/hm-philippines-10142013.jpg'},
      {'image':'../../assets/imgs/Zara-Banner.jpg'}
    ]
  }

}
