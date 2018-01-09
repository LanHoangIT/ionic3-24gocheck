import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ShopDetailPage} from "../shop-detail/shop-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // pageShopDetail: page = ShopDetailPage;
  constructor(public navCtrl: NavController) {

  }
  onGoToDetailUser(){
    this.navCtrl.push(ShopDetailPage);
  }

}
