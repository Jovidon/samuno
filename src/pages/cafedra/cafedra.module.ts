import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CafedraPage } from './cafedra';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CafedraPage,
  ],
  imports: [
    IonicPageModule.forChild(CafedraPage),
    TranslateModule.forChild()
  ],
})
export class CafedraPageModule {}
