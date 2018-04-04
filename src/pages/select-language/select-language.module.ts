import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLanguagePage } from './select-language';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {createTranslateLoader} from '../../app/app.module';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    SelectLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLanguagePage),
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class SelectLanguagePageModule {}
