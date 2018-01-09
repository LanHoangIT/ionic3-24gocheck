
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ProductDetailPage} from "../product-detail/product-detail";

@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {
  pageDetail:string ;
  constructor(public navCtrl: NavController) {

  }

  onGoToDetail(){
    this.navCtrl.push(ProductDetailPage);
  }

}
