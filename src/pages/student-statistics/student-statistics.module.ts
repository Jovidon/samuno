import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentStatisticsPage } from './student-statistics';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    StudentStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentStatisticsPage),
    TranslateModule.forChild()
  ],
})
export class StudentStatisticsPageModule {}
