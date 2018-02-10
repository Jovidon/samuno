import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InqueryPage } from './inquery';

@NgModule({
  declarations: [
    InqueryPage,
  ],
  imports: [
    IonicPageModule.forChild(InqueryPage),
  ],
})
export class InqueryPageModule {}
