import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-words-list',
  templateUrl: 'words-list.html',
})
export class WordsListPage {
  wordCard:any;
  all:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wordCard=this.navParams.get('wordCard');
    this.all=this.navParams.get('all');
  }

  ionViewDidLoad() {

  }
  goWord(i){
    this.navCtrl.push('WordPage',{
      'words':this.wordCard.words,
      'index':i
    });

  }
  goExam(){
    this.navCtrl.push('ExamPage',{
      'wordCard':this.wordCard,
      'all':this.all
    });
  }
}
