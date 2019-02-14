import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserCenterPage } from '../user-center/user-center';
import { CartPage } from '../cart/cart';
import { NotFoundPage } from '../not-found/not-found';
import { IndexPage } from '../index/index';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  pageIndex = IndexPage
  cart=CartPage
  userCenter=UserCenterPage
  notFound=NotFoundPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
