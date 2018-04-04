import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTablePage } from './time-table';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTablePage),
    TranslateModule.forChild()
  ],
})
export class TimeTablePageModule {}
