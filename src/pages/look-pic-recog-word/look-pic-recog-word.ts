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
  time:any=30;
  timer:any;
  yourAnswer:any='-';

  results:any=[];
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
        console.log(this.results);
        for(let j=this.index;j<10;j++)
        {
          let result={
            src:this.questions[j].src,
            // yourAnswer:this.yourAnswer,
            trueAnswer:this.questions[j].english,
            chinese:this.questions[j].chinese,
          };

          this.results.push(result);
        }
        this.over=true;
      }
    }, 1000);

  }

  nextQuestion(){
      if(this.index>8){
          this.over=true;
          clearInterval(this.timer);
          console.log(this.results);
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
        let result={
          src:this.question.src,
          yourAnswer:this.yourAnswer,
          trueAnswer:this.question.english,
          chinese:this.question.chinese,
        };

        this.results.push(result);

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
    this.yourAnswer=this.question.option1.value;
  }
  select2(){
    this.selected1=false;
    this.selected2=true;
    this.selected3=false;
    this.selected4=false;
    this.selected=2;
    this.yourAnswer=this.question.option2.value;
  }
  select3(){
    this.selected1=false;
    this.selected2=false;
    this.selected3=true;
    this.selected4=false;
    this.selected=3;
    this.yourAnswer=this.question.option3.value;
  }
  select4(){
    this.selected1=false;
    this.selected2=false;
    this.selected3=false;
    this.selected4=true;
    this.selected=4;
    this.yourAnswer=this.question.option4.value;
  }

}
