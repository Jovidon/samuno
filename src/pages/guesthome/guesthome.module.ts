import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuesthomePage } from './guesthome';

@NgModule({
  declarations: [
    GuesthomePage,
  ],
  imports: [
    IonicPageModule.forChild(GuesthomePage),
  ],
})
export class GuesthomePageModule {}
