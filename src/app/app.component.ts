import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core'; 

import { HomePage } from '../pages/home/home';


import { LanguageRepository } from './../enteties/language';
import { TimeTable } from './../enteties/time-table';
import { User } from './../enteties/user';
import { News } from './../enteties/news';
import { Guest } from "./../enteties/guest";
import { Status } from './../enteties/status';
import { Teacher } from './../enteties/teacher';
import { Notice } from './../enteties/notice';
import { TeacherTimeTable } from './../enteties/teachertimetable';

import { createConnection } from 'typeorm';
import { getRepository, Repository } from 'typeorm';


import { LocalNotifications } from '@ionic-native/local-notifications';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{title: string, component: any, icon: string }>;
  welcome : string;
  mainmenu : string;
  settings : string;
  lang : string;
  langId : number;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate : TranslateService, public localNotification : LocalNotifications) {
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
      //this.statusBar.backgroundColorByHexString('#ffffff');
      
      await createConnection({
        type: 'cordova',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [
          LanguageRepository,
          TimeTable,
          User,
          News,
          Guest,
          Status,
          Teacher,
          TeacherTimeTable,
          Notice
           ]
      });

      let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
      let lang = await languagerepo.findOneById(1);
      let guestrepo = getRepository('guest') as Repository <Guest>;

      let guest = new Guest();
        guest = await guestrepo.findOne({name : "God wills UNO will be beneficial for the development of SB TUIT!"});
      let userrepo = getRepository('user') as Repository <User>;
       let user = new User();
       let users : any;

       let studenta = await userrepo.findOne({idFaculty:1});
       let studentb = await userrepo.findOne({idFaculty:2});

       let statusrepo = getRepository('status') as Repository <Status>;
       let teacher = await statusrepo.findOne({role:1});

        if(lang){
            if(!guest){
            if(teacher|| studenta || studentb)
              this.rootPage = HomePage;
            else
              this.rootPage = 'StatusPage';
            }
             
            else 
              this.rootPage = 'GuesthomePage';
            }
        else 
        {
          
          this.rootPage = 'SelectLanguagePage';

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

  async logOut(){
   
    await getRepository('guest').clear();
    await getRepository('news').clear();
    await getRepository('user').clear();
    await getRepository('timetable').clear();
    await getRepository('status').clear();
    await getRepository('teachertimetable').clear();
    
    this.nav.setRoot('StatusPage');
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
}
