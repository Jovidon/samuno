import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrPage } from './registr';

@NgModule({
  declarations: [
    RegistrPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrPage),
  ],
})
export class RegistrPageModule {}
