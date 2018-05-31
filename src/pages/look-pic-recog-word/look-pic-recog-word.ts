import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppGlobal} from "../../app/app.service";

/**
 * Generated class for the LookPicRecogWordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-look-pic-recog-word',
  templateUrl: 'look-pic-recog-word.html',
})
export class LookPicRecogWordPage {

  over:boolean=false;
  schedule:any=0;
  overtime:any;
  score:any=0;
  questions:any=[];
  wordkind:any="animal";
  wordCards:any=[];
  question:any={
      src:'',
      option1:{
        value:'',
        TOF:false
      },
      option2:{
        value:'',
        TOF:false
      },
      option3:{
        value:'',
        TOF:false
      },
      option4:{
        value:'',
        TOF:false
      },
  };
  selected:any;
  selected1:boolean=false;
  selected2:boolean=false;
  selected3:boolean=false;
  selected4:boolean=false;
  index:any=0;
  time:any=5;
  timer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad LookPicRecogWordPage');
    this.wordCards=AppGlobal.wordCards;
    for(let wordCard of this.wordCards){
      if(this.wordkind===wordCard.english){
        this.questions=wordCard.questions1;
        break;
      }
    }
    this.question=this.questions[0];
    console.log(this.question);
    // window.setTimeout(this.timego(),1000);
    this.timego();
  }

  // timego(){
  //   this.time-=1;
  //   if(this.time==0)
  //     window.clearTimeout(this.timeId);
  //   this.timeId=window.setTimeout(this.timego(),1000);
  // }

  timego() {

    this.timer = setInterval(() => {
      this.time--;
      if(this.time==0){
        clearInterval(this.timer);
        this.over=true;
      }
    }, 1000);

  }

  nextQuestion(){
      if(this.index>8){
          this.over=true;
          return;
      }
      else{
        if(this.selected==1&&this.question.option1.TOF==true){
          this.score+=10;
        }else if(this.selected==2&&this.question.option2.TOF==true){
          this.score+=10;
        }else if(this.selected==3&&this.question.option3.TOF==true){
          this.score+=10;
        }else if(this.selected==4&&this.question.option4.TOF==true){
          this.score+=10;
        }
        this.index++;
        this.question=this.questions[this.index];
        this.selected1=false;
        this.selected2=false;
        this.selected3=false;
        this.selected4=false;
      }
  }

  select1(){
    this.selected1=true;
    this.selected2=false;
    this.selected3=false;
    this.selected4=false;
    this.selected=1;
  }
  select2(){
    this.selected1=false;
    this.selected2=true;
    this.selected3=false;
    this.selected4=false;
    this.selected=2;
  }
  select3(){
    this.selected1=false;
    this.selected2=false;
    this.selected3=true;
    this.selected4=false;
    this.selected=3;
  }
  select4(){
    this.selected1=false;
    this.selected2=false;
    this.selected3=false;
    this.selected4=true;
    this.selected=4;
  }

}
