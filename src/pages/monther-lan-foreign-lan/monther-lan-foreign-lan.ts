import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MontherLanForeignLanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monther-lan-foreign-lan',
  templateUrl: 'monther-lan-foreign-lan.html',
})
export class MontherLanForeignLanPage {

  questions: any = [];
  over: boolean = false;
  score: any = 0;
  question: any = {
    word: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    selected: '',
    audioSrc: ''
  };

  selected1: boolean = false;
  selected2: boolean = false;
  selected3: boolean = false;
  selected4: boolean = false;

  index: any = 0;
  time: any = 30;
  timer: any;
  yourAnswer: any = '-';

  results: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.questions = this.navParams.get('exam6');
    console.log(this.questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForeignLanMotherLanPage');
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
            word: this.questions[j].word,
            yourAnswer: this.yourAnswer,
            selected: this.questions[j].selected,
            audioSrc: this.questions[j].audioSrc
          };

          this.results.push(result);
        }
        this.over = true;
        console.log(this.results);
      }
    }, 1000);
  }

  select1() {
    this.selected1 = true;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = false;
    this.yourAnswer = this.question.option1;
  }
  select2() {
    this.selected1 = false;
    this.selected2 = true;
    this.selected3 = false;
    this.selected4 = false;
    this.yourAnswer = this.question.option2;
  }
  select3() {
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = true;
    this.selected4 = false;
    this.yourAnswer = this.question.option3;
  }
  select4() {
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = true;
    this.yourAnswer = this.question.option4;
  }

  nextQuestion() {

    if (this.yourAnswer == this.question.selected) {
      this.score += 10;
    }
    let result = {
      word: this.question.word,
      yourAnswer: this.yourAnswer,
      selected: this.question.selected,
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
    }
    else {
      this.over = true;
      clearInterval(this.timer);
      console.log(this.results);
    }
  }
  playAudio(i) {
    (document.getElementsByClassName("result-item")[i] as HTMLElement).style.backgroundColor = "#ff6b00";
    setTimeout(() => {
      (document.getElementsByClassName("result-item")[i] as HTMLElement).style.backgroundColor = "#fff";
    }, 1000);
    let audio = document.getElementsByClassName("word-audio")[i] as HTMLAudioElement;
    audio.play();
  }
}
