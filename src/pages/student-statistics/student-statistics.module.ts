import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentStatisticsPage } from './student-statistics';

@NgModule({
  declarations: [
    StudentStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentStatisticsPage),
  ],
})
export class StudentStatisticsPageModule {}
