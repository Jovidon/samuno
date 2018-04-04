import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnountsPage } from './announts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AnnountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnountsPage),
    TranslateModule.forChild()
  ],
})
export class AnnountsPageModule {}
