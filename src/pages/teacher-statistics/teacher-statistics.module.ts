import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherStatisticsPage } from './teacher-statistics';

@NgModule({
  declarations: [
    TeacherStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherStatisticsPage),
  ],
})
export class TeacherStatisticsPageModule {}
