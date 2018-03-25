import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsAnnountsPage } from './news-announts';

@NgModule({
  declarations: [
    NewsAnnountsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsAnnountsPage),
  ],
})
export class NewsAnnountsPageModule {}
