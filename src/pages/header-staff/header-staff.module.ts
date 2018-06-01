import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderStaffPage } from './header-staff';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderStaffPage,
  ],
  imports: [
    IonicPageModule.forChild(HeaderStaffPage),
    TranslateModule.forChild()
  ],
})
export class HeaderStaffPageModule {}
