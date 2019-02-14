import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IndexPage} from "../pages/index/index";
import {DetailPage} from "../pages/detail/detail";
import {CartPage} from "../pages/cart/cart";
import {LoginPage} from "../pages/login/login";
import {OrderConfirmPage} from "../pages/order-confirm/order-confirm";
import {PayPage} from "../pages/pay/pay";
import {UserCenterPage} from "../pages/user-center/user-center";
import {NotFoundPage} from "../pages/not-found/not-found";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      {title:"Index",component:IndexPage},
      {title:"Detail",component:DetailPage},
      {title:"Cart",component:CartPage},
      {title:"Login",component:LoginPage},
      {title:"OrderConfirm",component:OrderConfirmPage},
      {title:"Pay",component:PayPage},
      {title:"UserCenter",component:UserCenterPage},
      {title:"NotFound",component:NotFoundPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
