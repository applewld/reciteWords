import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LookPicWriteWordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-look-pic-write-word',
  templateUrl: 'look-pic-write-word.html',
})
export class LookPicWriteWordPage {
  questions:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions=this.navParams.get('exam2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookPicWriteWordPage');
  }

}
