import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordsListPage } from './words-list';

@NgModule({
  declarations: [
    WordsListPage,
  ],
  imports: [
    IonicPageModule.forChild(WordsListPage),
  ],
})
export class WordsListPageModule {}
