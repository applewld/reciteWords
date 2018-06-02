import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  wordCard:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wordCard=this.navParams.get('wordCard');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
  }

  goLookPicRecogWord(){
    this.navCtrl.push('LookPicRecogWordPage',{
      'wordCard':this.wordCard
    });
  }
}
