import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherRegistrPage } from './teacher-registr';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TeacherRegistrPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherRegistrPage),
    TranslateModule.forChild()
  ],
})
export class TeacherRegistrPageModule {}
