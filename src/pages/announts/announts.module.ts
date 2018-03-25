import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnountsPage } from './announts';

@NgModule({
  declarations: [
    AnnountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnountsPage),
  ],
})
export class AnnountsPageModule {}
