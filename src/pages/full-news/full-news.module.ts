import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullNewsPage } from './full-news';

@NgModule({
  declarations: [
    FullNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(FullNewsPage),
  ],
})
export class FullNewsPageModule {}
