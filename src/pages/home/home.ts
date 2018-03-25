import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { TimeTablePage } from '../time-table/time-table';
import { InqueryPage } from '../inquery/inquery';
import { TuitSbPage } from '../tuit-sb/tuit-sb';
import { StatisticsPage } from '../statistics/statistics';
import { ContactsPage } from '..//contacts/contacts';
import { NewsAnnountsPage } from './../news-announts/news-announts';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { AnnountsPage } from './../announts/announts';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user : any;
  constructor(public navCtrl: NavController, 
    public localNotification : LocalNotifications, 
    public platform : Platform,
    private screenOrientation: ScreenOrientation,
    public statusBar : StatusBar,
    public loadingCtrl: LoadingController) {
     
    //this.pushNoti();
  }
  ionViewWillEnter(){
   
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    
  }

  goToNewsPage(){
    this.navCtrl.push(NewsPage);
  }

  goToTimeTablePage(){
   
    this.navCtrl.push(TimeTablePage);
  
  }

  goToInqueryPage() {
    this.navCtrl.push(NewsPage);
  }

  goToTuitSbPage(){
    this.navCtrl.push(TuitSbPage);
  }

  goToStatisticsPage(){
    this.navCtrl.push(StatisticsPage);
  }

  goToContactsPage(){
    this.navCtrl.push(ContactsPage);
  }

  

  
}
