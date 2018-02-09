import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from './../pages/settings/settings';
import { NewsPage } from './../pages/news/news';
import { TimeTablePage } from './../pages/time-table/time-table';
import { InqueryPage } from './../pages/inquery/inquery';
import { TuitSbPage } from './../pages/tuit-sb/tuit-sb';
import { StatisticsPage } from './../pages/statistics/statistics';
import { ContactsPage } from './../pages/contacts/contacts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SelectLanguagePage } from './../pages/select-language/select-language';
import { RegistrPage } from './../pages/registr/registr';
import { LanguageProvider } from '../providers/language/language';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectLanguagePage,
    RegistrPage,
    SettingsPage,
    NewsPage,
    TimeTablePage,
    InqueryPage,
    TuitSbPage,
    StatisticsPage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
    }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectLanguagePage,
    RegistrPage,
    SettingsPage,
    NewsPage,
    TimeTablePage,
    InqueryPage,
    TuitSbPage,
    StatisticsPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LanguageProvider
  ]
})
export class AppModule {}
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
  }