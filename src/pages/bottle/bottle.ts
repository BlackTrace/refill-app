import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bottle',
  templateUrl: 'bottle.html'
})
export class BottlePage {

  bottles:Array<any> = [];
  constructor(public navCtrl: NavController) {
    this.bottles =[
      'test1bottles',
      'test2bottles',
      'test3bottles',
      'test4bottles',
      'test5bottles',
      'test6bottles',
      'test7bottles',
    ];

  }
  ionViewDidLoad(){
    console.log('触发ionViewDidLoad');
}

ionViewWillEnter(){
    console.log('触发ionViewWillEnter');
}

ionViewDidEnter(){
    console.log('触发ionViewDidEnter');
}

ionViewWillLeave(){
    console.log('触发ionViewWillLeave');
}

ionViewDidLeave(){
    console.log('触发ionViewDidLeave');
}

ionViewWillUnload(){
    console.log('触发ionViewWillUnload');
}
}
