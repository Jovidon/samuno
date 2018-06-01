import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CafedraInfoPage } from './cafedra-info';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CafedraInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CafedraInfoPage),
    TranslateModule.forChild()
  ],
})
export class CafedraInfoPageModule {}
