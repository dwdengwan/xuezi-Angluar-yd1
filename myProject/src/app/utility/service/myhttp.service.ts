//需求 在当前的文件创建服务类 (Injectable)
//在服务类 封装一个方法 负责 网络通信 通信前显示一个loading 通信后 将loading 关闭
import {Injectable} from '@angular/core';
import {LoadingController,ToastController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@Injectable()//装饰器

//创建服务类
export class MyHttpService{

    constructor(
        private myHttp:HttpClient,
        private loadingCtrl:LoadingController,
        private myToast:ToastController,
    ){}

    //在服务类中创建一个自定义的方法 url 请求地址 handler请求成功后 要执行的处理函数
    sendGetRequest(url,handler){
        // console.log("显示loading");
        var myLoading=this.loadingCtrl.create({
            content:"正在请求数据...",
            // duration:1500,
        });
        myLoading.present();

        // console.log("准备发起一次get请求");
        this.myHttp.get(url,{withCredentials:true}).subscribe((result:any)=>{
            //请求成功之后,调用通过参数传来的方法,对请求的数据做处理
            handler(result)
        });

        // console.log("关闭loading");
        myLoading.dismiss();
    }

    message(msg,time){
        var myToast=this.myToast.create({
            message:msg,
            duration:time,
          });
         myToast.present();
    }
}