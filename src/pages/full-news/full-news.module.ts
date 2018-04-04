import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullNewsPage } from './full-news';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FullNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(FullNewsPage),
    TranslateModule.forChild()
  ],
})
export class FullNewsPageModule {}
