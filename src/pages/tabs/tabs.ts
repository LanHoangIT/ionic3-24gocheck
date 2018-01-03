import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { NotiPage } from '../notification/notification';
import { CartPage } from '../cart/cart';
import { AccountPage } from '../account/account';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = NotiPage;
  tab4Root = CartPage;
  tab5Root = AccountPage;

  constructor() {

  }
}
