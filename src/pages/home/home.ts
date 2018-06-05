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
  all:any={
    wordcard:''
  };
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
              this.all=item;
            }
          }
        },err=>{
          console.log(err);
        });



  }
  goWordsList(wordCard){
    this.navCtrl.push('WordsListPage',{'wordCard':wordCard,'all':this.all});
  }
  goSetting(){
    this.navCtrl.push('SettingPage,',{'all':this.all});
  }
  goExam(){
    // this.navCtrl.push('ExamPage');
  }
}
