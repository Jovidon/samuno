import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicantStatisticsPage } from './applicant-statistics';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ApplicantStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplicantStatisticsPage),
    TranslateModule.forChild()
  ],
})
export class ApplicantStatisticsPageModule {}
