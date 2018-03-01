import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalStatisticsPage } from './modal-statistics';

@NgModule({
  declarations: [
    ModalStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalStatisticsPage),
  ],
})
export class ModalStatisticsPageModule {}
