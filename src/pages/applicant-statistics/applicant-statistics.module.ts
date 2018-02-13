import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicantStatisticsPage } from './applicant-statistics';

@NgModule({
  declarations: [
    ApplicantStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplicantStatisticsPage),
  ],
})
export class ApplicantStatisticsPageModule {}
