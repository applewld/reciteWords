import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  over: boolean = false;
  score: any = 0;
  questions: any = [];
  question: any = {
    picSrc: '',
    audioSrc: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    selected: '',
    meaning: ''
  };
  selected: any = "-";
  selected1: boolean = false;
  selected2: boolean = false;
  selected3: boolean = false;
  selected4: boolean = false;
  index: any = 0;
  time: any = 30;
  timer: any;
  yourAnswer: any;

  results: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = this.navParams.get('exam1');
  }

  ionViewDidLoad() {
    this.question = this.questions[0];
    this.timego();
  }

  timego() {

    this.timer = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.timer);
        for (let j = this.index; j < 10; j++) {
          let result = {
            src: this.questions[j].picSrc,
            yourAnswer: this.yourAnswer,
            trueAnswer: this.questions[j].selected,
            meaning: this.questions[j].meaning,
            audioSrc: this.questions[j].audioSrc
          };

          this.results.push(result);
        }
        this.over = true;
      }
    }, 1000);

  }

  nextQuestion() {

    if (this.selected == this.question.selected) {
      this.score += 10;
    }
    let result = {
      src: this.question.picSrc,
      yourAnswer: this.selected,
      trueAnswer: this.question.selected,
      meaning: this.question.meaning,
      audioSrc: this.question.audioSrc
    };

    this.results.push(result);

    this.index++;

    if (this.index < 10) {
      this.question = this.questions[this.index];
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = false;
      this.yourAnswer = '-';
      this.selected = '-';
    }
    else {
      this.over = true;
      clearInterval(this.timer);
    }
  }

  select1() {
    this.selected1 = true;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = false;
    this.selected = this.question.option1;
  }
  select2() {
    this.selected1 = false;
    this.selected2 = true;
    this.selected3 = false;
    this.selected4 = false;
    this.selected = this.question.option2;
  }
  select3() {
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = true;
    this.selected4 = false;
    this.selected = this.question.option3;
  }
  select4() {
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = true;
    this.selected = this.question.option4;
  }

  playAudio(i) {
    (document.getElementsByClassName("resultText")[i] as HTMLElement).style.backgroundColor = "#ff6b00";
    setTimeout(() => {
      (document.getElementsByClassName("resultText")[i] as HTMLElement).style.backgroundColor = "#fff";
    }, 1000);
    let audio = document.getElementsByClassName("word-audio")[i] as HTMLAudioElement;
    audio.play();
  }
}
