import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  badgeCnt : number = 0;
  news : any;
  len : number;
  id : number ;
  human : number;
  key : boolean;
  constructor(public navCtrl: NavController, 
    public localNotification : LocalNotifications,
    private screenOrientation: ScreenOrientation,
    public getdata : RestApiProvider,
    public toastCtrl : ToastController,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(true, 'myMenu');
  }
  
  ionViewWillEnter(){
     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

  goToNewsPage(){
    this.navCtrl.push('NewsPage');
  }

  goToTimeTablePage(){
   
     this.navCtrl.push('TimeTablePage');
  
  }

  goToInqueryPage() {
      let human = this.human;
      this.navCtrl.push('AnnountsPage', {human});
  }

  goToTuitSbPage(){
    this.navCtrl.push('TuitSbPage');
  }

  goToStatisticsPage(){
    this.navCtrl.push('StatisticsPage');
  }

  goToContactsPage(){
    this.navCtrl.push('ContactsPage');
  }

  
}
