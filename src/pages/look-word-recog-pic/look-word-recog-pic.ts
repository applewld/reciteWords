import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LookWordRecogPicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-look-word-recog-pic',
  templateUrl: 'look-word-recog-pic.html',
})
export class LookWordRecogPicPage {
  over:any=false;

  questions:any=[];
  question:any={
    english:'',
    option1:{
      value:'',
      src:'',
      TOF:false
    },
    option2:{
      value:'',
      src:'',
      TOF:false
    },
    option3:{
      value:'',
      src:'',
      TOF:false
    },
    option4:{
      value:'',
      src:'',
      TOF:false
    }
  };
  wordCard:any;
  selected:any;

  index:any=0;
  score:any=0;
  time:any=5;
  TOF:any=false;
  timer:any;
  results:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wordCard=this.navParams.get('wordCard');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookWordRecogPicPage');
    this.questions=this.wordCard.questions2;
      this.question=this.questions[0];
    this.question.option1.src='../../assets/imgs/'+this.wordCard.english+'/'+this.question.option1.value+'.png';
    this.question.option2.src='../../assets/imgs/'+this.wordCard.english+'/'+this.question.option2.value+'.png';
    this.question.option3.src='../../assets/imgs/'+this.wordCard.english+'/'+this.question.option3.value+'.png';
    this.question.option4.src='../../assets/imgs/'+this.wordCard.english+'/'+this.question.option4.value+'.png';
    this.timego();
  }

  timego() {

    this.timer = setInterval(() => {
      this.time--;
      if(this.time==0){
        clearInterval(this.timer);
        for(let j=this.index;j<10;j++)
        {
          let result={
            tSrc:'../../assets/imgs/' + this.wordCard.english + '/' + this.questions[j].english + '.png',
            tValue:this.questions[j].english,
            ySrc:'../../assets/imgs/black.png',
            yValue:'-',
            TOF:false
          };

          this.results.push(result);
        }
        this.over=true;
      }
    }, 1000);

  }

  select1(){
    this.selected=this.question.option1.value;
    document.getElementById('option1').style.borderColor='orange';
    document.getElementById('option2').style.borderColor='#fff';
    document.getElementById('option3').style.borderColor='#fff';
    document.getElementById('option4').style.borderColor='#fff';
  }
  select2(){
    this.selected=this.question.option2.value;
    document.getElementById('option1').style.borderColor='#fff';
    document.getElementById('option2').style.borderColor='orange';
    document.getElementById('option3').style.borderColor='#fff';
    document.getElementById('option4').style.borderColor='#fff';
  }
  select3(){
    this.selected=this.question.option3.value;
    document.getElementById('option1').style.borderColor='#fff';
    document.getElementById('option2').style.borderColor='#fff';
    document.getElementById('option3').style.borderColor='orange';
    document.getElementById('option4').style.borderColor='#fff';
  }
  select4(){
    this.selected=this.question.option4.value;
    document.getElementById('option1').style.borderColor='#fff';
    document.getElementById('option2').style.borderColor='#fff';
    document.getElementById('option3').style.borderColor='#fff';
    document.getElementById('option4').style.borderColor='orange';
  }
  nextQuestion(){
    if(this.question.option1.value==this.selected&&this.question.option1.TOF==true)
    {
      this.score+=10;
      this.TOF=true;
    }
    else if(this.question.option2.value==this.selected&&this.question.option2.TOF==true)
    {
      this.score+=10;
      this.TOF=true;
    }
    else if(this.question.option3.value==this.selected&&this.question.option3.TOF==true)
    {
      this.score+=10;
      this.TOF=true;
    }
    else if(this.question.option4.value==this.selected&&this.question.option4.TOF==true)
    {
      this.score+=10;
      this.TOF=true;
    }
    let result={
      tSrc:'../../assets/imgs/' + this.wordCard.english + '/' + this.question.english + '.png',
      tValue:this.question.english,
      ySrc:(this.selected=='-')?'../../assets/imgs/black.png':('../../assets/imgs/' + this.wordCard.english + '/' + this.selected + '.png'),
      yValue:(this.selected=='-')?'-':(this.selected),
      TOF:this.TOF
    };
    this.results.push(result);
    this.index++;
    if(this.index<10){
      this.selected='-';
      this.question = this.questions[this.index];
      this.question.option1.src = '../../assets/imgs/' + this.wordCard.english + '/' + this.question.option1.value + '.png';
      this.question.option2.src = '../../assets/imgs/' + this.wordCard.english + '/' + this.question.option2.value + '.png';
      this.question.option3.src = '../../assets/imgs/' + this.wordCard.english + '/' + this.question.option3.value + '.png';
      this.question.option4.src = '../../assets/imgs/' + this.wordCard.english + '/' + this.question.option4.value + '.png';
      document.getElementById('option1').style.borderColor='#fff';
      document.getElementById('option2').style.borderColor='#fff';
      document.getElementById('option3').style.borderColor='#fff';
      document.getElementById('option4').style.borderColor='#fff';
      this.TOF=false;
    }
    else{
      this.over=true;
      clearInterval(this.timer);
      console.log(this.results);
    }
  }

}
