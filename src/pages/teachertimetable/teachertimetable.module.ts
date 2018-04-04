import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeachertimetablePage } from './teachertimetable';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TeachertimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(TeachertimetablePage),
    TranslateModule.forChild()
  ],
})
export class TeachertimetablePageModule {}
