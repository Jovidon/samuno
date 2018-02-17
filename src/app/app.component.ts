import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core'; 

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SelectLanguagePage } from './../pages/select-language/select-language';
import { SettingsPage } from './../pages/settings/settings';
import { InqueryPage } from './../pages/inquery/inquery';

import { LanguageRepository } from './../enteties/language';
import { TimeTable } from './../enteties/time-table';
import { User } from './../enteties/user';

import { createConnection } from 'typeorm'
import { getRepository, Repository } from 'typeorm';
import { RegistrPage } from '../pages/registr/registr';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate : TranslateService) {
     this.initializeApp();
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'BOSH MENU', component: HomePage, icon: "home" },
      { title: 'SOZLAMALAR', component: SettingsPage, icon: 'settings'}
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.splashScreen.hide();

     
      await createConnection({
        type: 'cordova',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [
          LanguageRepository,
          TimeTable,
          User

        ]
      });

      let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
      let lang = await languagerepo.findOneById(1);
    
        if(lang){
         
          this.rootPage = HomePage;
        }
        else 
        {
          
          this.rootPage = SelectLanguagePage;

        }
        this.translate.setDefaultLang(lang.code);
        
        //  this.translate.setDefaultLang('uz');
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
}
