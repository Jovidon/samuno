import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamPage } from './exam';

@NgModule({
  declarations: [
    ExamPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamPage),
  ],
})
export class ExamPageModule {}
