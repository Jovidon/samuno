import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { TimeTablePage } from '../time-table/time-table';
import { InqueryPage } from '../inquery/inquery';
import { TuitSbPage } from '../tuit-sb/tuit-sb';
import { StatisticsPage } from '../statistics/statistics';
import { ContactsPage } from '..//contacts/contacts';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public localNotification : LocalNotifications, 
    public platform : Platform,
    private screenOrientation: ScreenOrientation,
    public statusBar : StatusBar) {
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
    this.navCtrl.push(InqueryPage);
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
    
  pushNoti() {
    this.platform.ready().then(() => {
      this.localNotification.schedule( {
        id : 1,
        title : 'UNO',
        text : 'Welcome to UNO!, Be creative !',
        at: new Date(new Date().getTime() + 3 * 1000),
        data :  { "id" : 1, "name" : "John"}
      });
    });
  }

  
}
