// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
// import {HttpClient} from '@angular/common/http';

//引入类
// import {NotFoundPage} from '../not-found/not-found';
// import {CartPage} from '../cart/cart';
// import {MyHttpService} from '../../app/utility/service/myhttp.service';
// import {LoginPage} from '../login/login';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-detail',
//   templateUrl: 'detail.html',
// })
// export class DetailPage {
  // details={};//保存服务器端所返回的详情数据
  //保存所引入的类
  // notFound = NotFoundPage;
  // cart = CartPage;
  // buyCount=1;

  // jump4(){
  //   console.log(444);
  //   var url="http://localhost:8080/cart/add?lid="+this.navParams.get('id')+"&buyCount="+this.buyCount;
    //调用服务中的方法发起网络请求
    // this.myService.sendGetRequest(url,
    //   (result:any)=>{
    //       console.log(result);
    //       if(result.code==300){
    //         var myToast=this.myToast.create({
    //           message:"添加失败,先登录",
    //           duration:1500
    //         });
    //         myToast.present();
    //         this.navCtrl.push(LoginPage);
    //       }
    //     });
    // 注释！！this.myHttp.get(url).subscribe((result:any)=>{
    //   console.log(result);
    //   if(result.code==300){
    //     var myToast=this.myToast.create({
    //       message:"添加失败,先登录",
    //       duration:1500
    //     });
    //     myToast.present();
    //   }
    // 注释！！})
  // }

  // constructor(
  //   public navCtrl: NavController, 
  //   public navParams: NavParams,
  //   private myHttp:HttpClient,
  //   private myToast:ToastController,
  //   private myService:MyHttpService,) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailPage');
  //   console.log(this.navParams.get("id"));
  //   var id=this.navParams.get("id");
  //   var url="http://127.0.0.1:8080/product/detail?lid="+id;
  //   this.myService.sendGetRequest(url,
  //     (result:any)=>{
  //         this.details=result.details;
  //       });
    //注释！！！ this.myHttp.get(url).subscribe((result:any)=>{
    //   this.details=result.details;
    // 注释！！！});
//   }

// }



import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { CartPage } from '../cart/cart'
import { NotFoundPage } from '../not-found/not-found'
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import {LoginPage} from '../login/login'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  //保存所引入的类，方便在模板中调用
  cart = CartPage
  notFound = NotFoundPage

  details = {} //保存服务器端所返回的详情数据

  constructor(
    private myService: MyHttpService,
    private toastCtrl: ToastController,
    private myHttp: HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    // 接收参数 并且请求该参数所对应的商品详情数据
    console.log(this.navParams.get('id'))
    // 向服务器请求指定id对应的详情数据 HttpClient
    var url = "http://localhost:8080/product/detail?lid=" + this.navParams.get("id")

    this.myService.sendGetRequest(
      url,
      (result: any) => {
        console.log(result)//result.details
        //保存数据，到视图中显示
        this.details = result.details
      }
    )
    /*
    this.myHttp
      .get(url)
      .subscribe()
      */
  }

  // 加入购物车
  addToCart() {
    //请求，根据请求到结果做处理
    var url = "http://localhost:8080/cart/add?buyCount=1&lid=" + this.navParams.get('id')

    //调用服务中的方法发起网络请求
    this.myService.sendGetRequest(
      url,
      (result: any) => {
        console.log(result)
        //code是300，显示一个toast
        if (result.code == 300) {          
          // 跳转到登录页面
          this.navCtrl.push(LoginPage)
        }
      }
    );
    /*
    this.myHttp
    .get(url)
    .subscribe()*/


  }

}