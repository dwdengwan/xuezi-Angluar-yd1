import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModalController} from 'ionic-angular';

import { MyHttpService } from '../../app/utility/service/myhttp.service';
import {PayPage} from "../pay/pay";

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  list=[];

  showPay(){
    var myModal=this.myModal.create(PayPage);
    myModal.present();
    myModal.onDidDismiss((data)=>{
      if(data==1){
        //支付完成,跳转至首页
        this.navCtrl.parent.select(0);
      }
    })
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private myService:MyHttpService,
    private myModal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    var url="http://localhost:8080/cart/list";
    this.myService.sendGetRequest(
      url,
      (result:any)=>{
        console.log(result);
        //将result.data保存起来
        this.list=result.data;
      }
    )
  }

}
