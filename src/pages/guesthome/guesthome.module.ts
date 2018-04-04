import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuesthomePage } from './guesthome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GuesthomePage,
  ],
  imports: [
    IonicPageModule.forChild(GuesthomePage),
    TranslateModule.forChild()
  ],
})
export class GuesthomePageModule {}
