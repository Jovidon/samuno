import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderStaffModolPage } from './header-staff-modol';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderStaffModolPage,
  ],
  imports: [
    IonicPageModule.forChild(HeaderStaffModolPage),
    
    TranslateModule.forChild()
  ],
})
export class HeaderStaffModolPageModule {}
