import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalStatisticsPage } from './modal-statistics';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ModalStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalStatisticsPage),
    TranslateModule.forChild()
  ],
})
export class ModalStatisticsPageModule {}
