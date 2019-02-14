import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  num=5;
  // change(){
  //   this.num--;
  //   if(this.num==0){
  //     console.log(this.num);
  //     this.navCtrl.pop();
  //   }
  // }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    var timer=setInterval(()=>{
      this.num--;
      if(this.num==1){
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }
        clearInterval(timer);
      }
    },1000)
  }

}
