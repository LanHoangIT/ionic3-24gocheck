import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { NotiPage } from '../pages/notification/notification';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ShopDetailPage} from "../pages/shop-detail/shop-detail";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CartPage} from "../pages/cart/cart";
import {AccountPage} from "../pages/account/account";



@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    NotiPage,
    HomePage,
    CartPage,
    AccountPage,
    ShopDetailPage,
    TabsPage
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
