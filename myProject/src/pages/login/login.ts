// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
// import {HttpClient} from '@angular/common/http';

// import {MyHttpService} from '../../app/utility/service/myhttp.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
  //获取用户名和密码
  // uname="";
  // upwd="";
  //发给服务器验证
  // jump(){
  //   var url="http://127.0.0.1:8080/user/login";
  //   this.myHttp.post(
  //     url,
  //     {uname:this.uname,upwd:this.upwd},
  //     {withCredentials:true}//保存登录成功的状态 保存session
  //     ).subscribe((result:any)=>{
  //     console.log(result);
  //     if(result.code==200){
  //       this.navCtrl.pop();//返回上一页
  //     }else{
  //       var msg="登录1111111失败";
  //       var time=1500;
  //       this.myService.message(msg,time);
        //注释！！！ var myToast=this.myToast.create({
        //   message:"登录失败",
        //   duration:1500
        // });
        //注释！！！ myToast.present();
        
  //     }
  //   })
  // }

  // constructor(
  //   public navCtrl: NavController,
  //   public navParams: NavParams,
  //   private myHttp:HttpClient,
  //   private myToast:ToastController,
  //   private myService:MyHttpService,) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
    //注释！！！ var url="http://127.0.0.1:8080/user/login";
    // this.myHttp.post(
    //   url,
    //   {uname:'dingding',upwd:'123456'},
    //   {withCredentials:true}//保存登录成功的状态 保存session
    //   ).subscribe((result)=>{
    //   console.log(result);
    //注释！！！ })
//   }

// }


import { Component } from '@angular/core';
import {ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // 和表单元素做一个双向数据绑定
  myName = "";
  myPwd = "";

  constructor(
    private toastCtrl:ToastController,
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    /*
    // 网络请求中涉及到post请求和参数的处理
    var url = "http://localhost:8080/user/login"
    
    this.myHttp
    .post(
      url,
      {uname:'dingding',upwd:'123456'},{withCredentials:true}
    )
    .subscribe((result)=>{
      console.log(result)
    })
    */
  }


  login(){
    // 获取用户名和密码
    console.log(this.myName,this.myPwd)
    // 发给服务器校验
    var url = "http://localhost:8080/user/login"    
    this.myHttp
    .post(
      url,
      {uname:this.myName,upwd:this.myPwd},{withCredentials:true}
    )
    .subscribe((result:any)=>{
      console.log(result)
      // 登录成功，返回上一页;登录失败，显示一个toast:'登录失败
      if(result.code == 200){
        this.navCtrl.pop()
      }else{
        var myToast = this.toastCtrl.create({
          message:'登录失败',
          duration:1500
        });
        myToast.present()
      } 
    })   
    
  }

}
