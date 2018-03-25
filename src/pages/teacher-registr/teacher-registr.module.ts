import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherRegistrPage } from './teacher-registr';

@NgModule({
  declarations: [
    TeacherRegistrPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherRegistrPage),
  ],
})
export class TeacherRegistrPageModule {}
