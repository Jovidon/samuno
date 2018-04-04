import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TuitSbPage } from './tuit-sb';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TuitSbPage,
  ],
  imports: [
    IonicPageModule.forChild(TuitSbPage),
    TranslateModule.forChild()
  ],
})
export class TuitSbPageModule {}
