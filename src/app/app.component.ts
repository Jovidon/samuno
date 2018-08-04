import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core'; 

import { HomePage } from '../pages/home/home';


import { LanguageRepository } from './../enteties/language';

import { createConnection } from 'typeorm';
import { getRepository, Repository } from 'typeorm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate : TranslateService) {
    this.initializeApp();

    this.pages = [
      { title: 'Settings', component: 'SettingsPage', icon: 'assets/imgs/settings.png'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      await createConnection({
        type: 'cordova',
        database: 'unodb',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [
          LanguageRepository,
           ]
      });

      let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
      let lang = await languagerepo.findOneById(1);

        if(lang){
              this.rootPage = HomePage;
            }
        else 
        {
          
          this.rootPage = 'SelectLanguagePage';

        }
        this.translate.setDefaultLang(lang.code);
      this.rootPage = HomePage;
      this.translate.setDefaultLang('uz');
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  async logOut(){
    // With provider
    // await getRepository('guest').clear();
    // await getRepository('user').clear();
    // await getRepository('timetable').clear();
    // await getRepository('status').clear();
    // await getRepository('teachertimetable').clear();
    
    this.nav.setRoot('SelectLanguagePage');
  }
  
  goToAboutAppPage(){
    
  }

}
