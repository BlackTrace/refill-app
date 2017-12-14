import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage{

  friends:Array<any> = [];
  constructor(public navCtrl: NavController) {
    this.friends =[
      'test1friends',
      'test2friends',
      'test3friends',
      'test4friends',
      'test5friends',
      'test6friends',
      'test7friends',
    ];
  }

}
