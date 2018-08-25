import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrPage } from './registr';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegistrPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrPage),
    TranslateModule.forChild()
  ],
})
export class RegistrPageModule {}
