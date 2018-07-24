import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {

  index: any;
  words: any = [];
  word: any = {
    word: '',
    meaning: '',
    picSrc: '',
    audioSrc: ''
  };
  canSee = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    let audio = document.getElementById("word-audio") as HTMLAudioElement;
    audio.play();
  }

  ionViewWillEnter() {
    this.words = this.navParams.get('words');
    this.index = this.navParams.get('index');
    this.word = this.words[this.index];
    if (this.index === 0) {
      document.getElementById('icon1').style.color = '#a9a9a9';
      document.getElementById('icon2').style.color = '#427feb';
    }
    else if (this.index === this.words.length - 1) {
      document.getElementById('icon2').style.color = '#a9a9a9';
      document.getElementById('icon1').style.color = '#427feb';
    }
  }

  showLast() {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.word = this.words[this.index];
    }
    if (this.index === 0) {
      document.getElementById('icon1').style.color = '#a9a9a9';
      document.getElementById('icon2').style.color = '#427feb';
    }
    else {
      document.getElementById('icon2').style.color = '#427feb';
      document.getElementById('icon1').style.color = '#427feb';
    }
    document.getElementById("icon1").style.visibility="hidden";
    setTimeout(()=>{
      document.getElementById("icon1").style.visibility="visible";
    },100);
    setTimeout(()=>{
      let audio = document.getElementById("word-audio") as HTMLAudioElement;
      audio.play();
    },500);
  }

  showNext() {
    if (this.index < this.words.length - 1) {
      this.index = this.index + 1;
      this.word = this.words[this.index];
    }
    if (this.index === this.words.length - 1) {
      document.getElementById('icon2').style.color = '#a9a9a9';
      document.getElementById('icon1').style.color = '#427feb';
    }
    else {
      document.getElementById('icon2').style.color = '#427feb';
      document.getElementById('icon1').style.color = '#427feb';
    }
    document.getElementById("icon2").style.visibility="hidden";
    setTimeout(()=>{
      document.getElementById("icon2").style.visibility="visible";
    },100);
    setTimeout(()=>{
      let audio = document.getElementById("word-audio") as HTMLAudioElement;
      audio.play();
    },500);
  }

  cantsee() {
    this.canSee = false;
    document.getElementById('englishWord').style.visibility = 'hidden';
    document.getElementById('soundmark').style.visibility = 'hidden';
  }
  cansee() {
    this.canSee = true;
    document.getElementById('englishWord').style.visibility = 'visible';
    document.getElementById('soundmark').style.visibility = 'visible';
  }

  playAudio() {
    document.getElementById("play").style.visibility="hidden";
    setTimeout(()=>{
      document.getElementById("play").style.visibility="visible";
    },100);
    let audio = document.getElementById("word-audio") as HTMLAudioElement;
    audio.play();
  }
}
