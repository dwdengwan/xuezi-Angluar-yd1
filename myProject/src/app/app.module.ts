import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { MyApp } from './app.component';
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
import {MyHttpService} from './utility/service/myhttp.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    DetailPage,
    CartPage,
    LoginPage,
    OrderConfirmPage,
    PayPage,
    UserCenterPage,
    NotFoundPage,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    DetailPage,
    CartPage,
    LoginPage,
    OrderConfirmPage,
    PayPage,
    UserCenterPage,
    NotFoundPage,
  ],
  providers: [//引入服务类
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
