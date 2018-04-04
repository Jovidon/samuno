import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsAnnountsPage } from './news-announts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NewsAnnountsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsAnnountsPage),
    TranslateModule.forChild()
  ],
})
export class NewsAnnountsPageModule {}
