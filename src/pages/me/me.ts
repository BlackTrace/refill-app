import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  MyInfo:Object;
  constructor(public navCtrl: NavController) {

  }

}
