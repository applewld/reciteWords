import { Component } from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl:ActionSheetController,
              public alertCtrl:AlertController) {
  }

  language:any='English';

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  presentActionSheet() {
    console.log(11)
    const actionSheet = this.actionSheetCtrl.create({
      title: '语言',
      buttons: [
        {
          text: 'English',
          handler: () => {
            this.language='English';
          }
        },{
          text: '简体中文',
          handler: () => {
            this.language='简体中文';
          }
        },{
          text: '日本语',
          handler: () => {
            this.language='日本语';
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
