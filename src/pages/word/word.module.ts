import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordPage } from './word';

@NgModule({
  declarations: [
    WordPage,
  ],
  imports: [
    IonicPageModule.forChild(WordPage),
  ],
})
export class WordPageModule {}
