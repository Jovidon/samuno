import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutAppPage } from './about-app';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AboutAppPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutAppPage),
    TranslateModule.forChild()
  ],
})
export class AboutAppPageModule {}
