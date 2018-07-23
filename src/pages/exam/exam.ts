import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  wordCard:any;
  all:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wordCard=this.navParams.get('wordCard');
    this.all=this.navParams.get('all');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
  }

  goLookPicRecogWord(){
    this.navCtrl.push('LookPicRecogWordPage',{
      'exam1':this.wordCard.exam1,
      'all':this.all
    });
  }
  goLookWordRecogPic(){
    this.navCtrl.push('LookWordRecogPicPage',{
      'exam2':this.wordCard.exam2,
      'all':this.all
    });
  }
  goLookPicWriteWord(){
    this.navCtrl.push('LookPicWriteWordPage',{
      'exam3':this.wordCard.exam3,
      'all':this.all
    })
  }
  goListenSoundTellPic(){
    this.navCtrl.push('ListenSoundTellPicPage',{
      'exam4':this.wordCard.exam4,
      'all':this.all
    });
  }
  goForeignLanMotherLan(){
    this.navCtrl.push('ForeignLanMotherLanPage',{
      'exam5':this.wordCard.exam5,
      'all':this.all
    });
  }
  goMontherLanForeignLan(){
    this.navCtrl.push('MontherLanForeignLanPage',{
      'exam6':this.wordCard.exam6,
      'all':this.all
    })
  }
}
