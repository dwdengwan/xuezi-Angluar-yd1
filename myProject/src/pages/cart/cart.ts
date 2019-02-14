import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service';
import {LoginPage} from '../login/login';
import  {OrderConfirmPage} from "../order-confirm/order-confirm";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  list=[];//保存服务器中所返回的购物车列表
  isAllSelected=false;//是否被全选 与全选框做双向数据绑定
  count=[];

  //购物车列表的商品再被操作选中的处理函数
  handleSelect(){
    var bool=true;
    for(var i=0;i<this.list.length;i++){
      //执行一个逻辑与运算 保存结果至isAllSelected
      // if(i==0){
      //   var bool=this.list[0].isSelected;
      // }else{
      //   var bool=this.list[i-1].isSelected&&this.list[i].isSelected;
      // }
      bool=bool&&this.list[i].isSelected;
      // this.isAllSelected=bool;
      // console.log(bool);
      if(bool==true){
        this.isAllSelected=true;
      }else{
        this.isAllSelected=false;
      }
    }
  };

  handleSelectAll(){
    //处理全选 遍历list 将每一个对象的isSelected 都改为isAllSelected
    for(var i=0;i<this.list.length;i++){
      this.list[i].isSelected=this.isAllSelected;
    }
  }
  constructor(//实例化
    public navCtrl: NavController,//跳转
    public navParams: NavParams,//跳转
    private myService:MyHttpService,//http 数据请求
    ) {
  }

  //计算选中商品的总价格
  calcAll(){
    var totalPrice=0;
    for(var i=0;i<this.list.length;i++){
      var p=this.list[i];
      if(p.isSelected){
        totalPrice+=(p.price*this.count[i]);
      }
    }
    return totalPrice;
  }

  //跳转至订单页面
  jump(){
    this.navCtrl.push(OrderConfirmPage);
  };

  //按钮的加减运算
  change(myIndex,i){
    if(this.count[myIndex]>=1){
      this.count[myIndex]+=i;
    }else{
      this.count[myIndex]=1
    }
    console.log(this.count);
    var url="http://localhost:8080/cart/updatecount?iid="+myIndex+"&count="+this.count;
    this.myService.sendGetRequest(url,(result:any)=>{
      console.log(result);
    })
    // console.log($event);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CartPage');
    var url="http://localhost:8080/cart/list";
    this.myService.sendGetRequest(url,((reuslt:any)=>{
      if(reuslt.code==300){
        this.navCtrl.push(LoginPage);
      }else if(reuslt.code==200){
        //将result.data保存起来 到视图渲染
        this.list=reuslt.data;
        console.log(reuslt.data);
        //遍历list当中的每一个对象 添加一个 属性isSelected
        for(var i=0;i<this.list.length;i++){
          this.list[i].isSelected=false;
          this.count[i]=this.list[i].count;
          console.log(this.count);
        }
      }
    }))
  }

}
