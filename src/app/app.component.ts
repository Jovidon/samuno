import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core'; 

import { HomePage } from '../pages/home/home';


import { LanguageRepository } from './../enteties/language';
import { User } from './../enteties/user';
import { Badges } from './../enteties/badges';
import { Table } from './../enteties/timetable';
import { UniversityImages } from './../enteties/unversityimages';
import { Exam } from './../enteties/exam';
import { createConnection } from 'typeorm';
import { getRepository, Repository } from 'typeorm';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any, icon: string }>;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public translate : TranslateService,
    public authProvider: AuthProvider) {
    this.initializeApp();

    this.pages = [
      { title: 'btnSettings', component: 'SettingsPage', icon: 'assets/imgs/set.png'},
      { title: 'btnContact', component: 'ContactsPage', icon: 'assets/imgs/contact.png'}
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
          User,
          Badges,
          Table,
          UniversityImages,
          Exam
           ]
      });

      this.authProvider.getCurrentUser();
      let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
      let lang = await languagerepo.findOneById(1);
      

        if(lang) {
          if(AuthProvider.role == 3)
              this.rootPage = 'GuesthomePage';
          else 
          if(AuthProvider.role != 0)
              this.rootPage = HomePage;
          else 
              this.rootPage = 'StatusPage';
        }
        else {
          this.rootPage = 'SelectLanguagePage';
        }
        this.translate.setDefaultLang(lang.code);
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  async logOut(){
    this.authProvider.logOut();
    this.authProvider.getCurrentUser();
    this.nav.setRoot('StatusPage');
  }
  
  goToStatisticsPage(){
    this.nav.push('StatisticsPage');
  }

}
