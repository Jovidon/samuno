import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherStatisticsPage } from './teacher-statistics';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TeacherStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherStatisticsPage),
    TranslateModule.forChild()
  ],
})
export class TeacherStatisticsPageModule {}
