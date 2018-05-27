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
  words:any=[];
  wordkind:any;
  wordCard:any;
  wordkindWithChinese:any;
  items:any;
  wordCards:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=this.navParams.get('items');
    this.wordCard= this.items;
    this.wordkind= this.items.english;
    this.wordkindWithChinese= this.items.chinese;
    this.words= this.items.words;
  }

  ionViewDidLoad() {

    for(let item of this.words){
      let word={
        english:'',
        chinese:'',
        src:''
      };
      word.english=item.english;
      word.chinese=item.chinese;
      word.src="../../assets/imgs/"+this.wordkind+"/"+item.english+".png";
      this.wordCards.push(word);
    }
  }
  goWord(word,i){
    this.navCtrl.push('WordPage',{
      'wordCard':this.wordCard,
      'wordKind':this.wordkind,
      'words':this.words,
      'item':word,
      'index':i
    });

  }
}
