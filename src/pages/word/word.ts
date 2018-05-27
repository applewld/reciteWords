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

  word:any={
    english:'',
    chinese:'',
    src:''
  };
  index:any;
  words:any=[];
  wordkind:any;
  wordCard:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    this.word={...this.navParams.get('item')};
    this.index=this.navParams.get('index');
    this.words=this.navParams.get('words');
    this.wordkind=this.navParams.get('wordKind');
    this.wordCard=this.navParams.get('wordCard');
    console.log(this.word);
    console.log(this.index);
    console.log(this.words);
    if(this.index===0){
      document.getElementById('icon1').style.color='#a9a9a9';
      document.getElementById('icon2').style.color='#427feb';
    }
    else if(this.index===this.words.length-1){
      document.getElementById('icon2').style.color='#a9a9a9';
      document.getElementById('icon1').style.color='#427feb';
    }
  }

  showLast(){
      console.log(1);
      if(this.index>0){
        this.index=this.index-1;
        this.word.chinese=this.words[this.index].chinese;
        this.word.english=this.words[this.index].english;
        this.word.src="../../assets/imgs/"+this.wordkind+"/"+this.word.english+".png";
      }
      if(this.index===0){
        document.getElementById('icon1').style.color='#a9a9a9';
        document.getElementById('icon2').style.color='#427feb';
      }
      else{
        document.getElementById('icon2').style.color='#427feb';
        document.getElementById('icon1').style.color='#427feb';
      }
  }

  showNext(){
    console.log(2);
    if(this.index<this.words.length-1){
      this.index=this.index+1;
      this.word.chinese=this.words[this.index].chinese;
      this.word.english=this.words[this.index].english;
      this.word.src="../../assets/imgs/"+this.wordkind+"/"+this.word.english+".png";
    }
    if(this.index===this.words.length-1){
      document.getElementById('icon2').style.color='#a9a9a9';
      document.getElementById('icon1').style.color='#427feb';
    }
    else{
      document.getElementById('icon2').style.color='#427feb';
      document.getElementById('icon1').style.color='#427feb';
    }
  }

  // goBack(){
  //   this.navCtrl.push('WordsListPage',{items:this.wordCard});
  // }
}
