import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';

import { AppGlobal } from "../../app/app.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  wordCards:any;
  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter(){
    this.wordCards=AppGlobal.wordCards;
  }
  goWordsList(wordCard){
    this.navCtrl.push('WordsListPage',{items:wordCard});
  }
  goSetting(){
    this.navCtrl.push('SettingPage');
  }
  goExam(){
    this.navCtrl.push('ExamPage');
  }
}
