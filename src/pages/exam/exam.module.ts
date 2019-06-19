import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamPage } from './exam';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ExamPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamPage),
    TranslateModule.forChild()
  ],
})
export class ExamPageModule {}
