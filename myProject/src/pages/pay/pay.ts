import { Component } from '@angular/core';
import { ViewController,LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import {IndexPage} from '../index/index';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  showLoading(){
    // var msg="支付中...";
    // var time=3000;
    // this.myServer.message(msg,time);
    var myloading=this.myLoading.create({
      content:"支付中...",
    });

    setTimeout(()=>{
      myloading.dismiss();
      this.myViewCtrl.dismiss(1);
      // this.navCtrl.push(IndexPage);
    },3000)
  };
  //关闭模态框
  closeModal(){
    this.myViewCtrl.dismiss(0);
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private myServer:MyHttpService,
    private myViewCtrl:ViewController,
    private myLoading:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

}
