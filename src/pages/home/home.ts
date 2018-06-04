import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';

import { AppService } from "../../app/app.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  wordCards:any=[];
  language:any="chinese";
  tempwords:any;
  constructor(public navCtrl: NavController,
              private appService:AppService) {

  }
  ionViewWillEnter(){
      this.tempwords=this.appService.getRequestContact()
        .subscribe(res=>{
          this.tempwords=res;
          for(let item of this.tempwords){
            if(item["language"]==this.language){
              this.wordCards=item["wordCards"];
            }
          }
        },err=>{
          console.log(err);
        });



  }
  goWordsList(wordCard){
    this.navCtrl.push('WordsListPage',{wordCard:wordCard});
  }
  goSetting(){
    this.navCtrl.push('SettingPage');
  }
  goExam(){
    // this.navCtrl.push('ExamPage');
  }
}
