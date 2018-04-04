import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { getRepository, Repository } from 'typeorm';
import { Status } from './../../enteties/status';

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
    this.navCtrl.push('NewsPage');
  }

  async goToTimeTablePage(){
    let statusrepo = getRepository('status') as Repository <Status>;
    let teacher = await statusrepo.findOne({role:1});
    

    if(teacher){
      this.navCtrl.push('TeachertimetablePage');
    }
    else
    {
      this.navCtrl.push('TimeTablePage');
    }

   // this.navCtrl.push('TimeTablePage');
  
  }

  goToInqueryPage() {
    this.navCtrl.push('NewsPage');
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
