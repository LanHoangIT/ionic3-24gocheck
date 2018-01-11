import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { NotiPage } from '../pages/notification/notification';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CartPage} from "../pages/cart/cart";
import {AccountPage} from "../pages/account/account";
import {ProductDetailPage} from "../pages/product-detail/product-detail";
import {SliderComponent} from "../components/slider/slider";
import {ShopDetailPage} from "../pages/shop-detail/shop-detail";



@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    NotiPage,
    HomePage,
    CartPage,
    AccountPage,
    ShopDetailPage,
    ProductDetailPage,
    TabsPage,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    NotiPage,
    HomePage,
    CartPage,
    AccountPage,
    ShopDetailPage,
    ProductDetailPage,
    TabsPage,
    SliderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
