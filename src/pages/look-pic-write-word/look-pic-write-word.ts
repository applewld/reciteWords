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

  questions: any = [];
  question: any = {
    word: '',
    meaning: '',
    picSrc: '',
  };

  over: any = false;
  index: any = 0;
  score: any = 0;
  time: any = 30;
  timer: any;
  results: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = this.navParams.get('exam3');
    console.log(this.questions);
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
            picSrc: this.questions[j].picSrc,
            meaning: this.questions[j].meaning,
            word: this.questions[j].word,
            yourAnswer: '-'
          };

          this.results.push(result);
        }
        this.over = true;
        console.log(this.results);
      }
    }, 1000);

  }

  nextQuestion() {
    let yourAnswer = (document.getElementById("yourAnswer") as HTMLInputElement).value;
    if (yourAnswer == "")
      yourAnswer = '-';
    if (yourAnswer == this.question.word)
      this.score += 10;
    let result = {
      picSrc: this.question.picSrc,
      meaning: this.question.meaning,
      word: this.question.word,
      yourAnswer: yourAnswer
    }
    console.log(result)
    this.results.push(result);
    this.index++;
    if (this.index < 10) {
      this.question = this.questions[this.index];
      (document.getElementById("yourAnswer")as HTMLInputElement).value="";
    }
    else {
      this.over = true;
      clearInterval(this.timer);
      console.log(this.results);
    }
  }
}
