import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    StatusPage,
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
    TranslateModule.forChild()
  ],
})
export class StatusPageModule {}
