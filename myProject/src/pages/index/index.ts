import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  //定义变量来保存服务器的返回的数据
  myData={};
  moveto(id){
    console.log(id);
    this.navCtrl.push(DetailPage,{id:id})
  }

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url="http://localhost:8080/index";
    this.myHttp.get(url).subscribe((result:any)=>{
      // console.log(result);
      // 保存数据到当前类中,方便到模板中调用
      this.myData=result;
      // console.log(this.myData);
    })
  }

}
