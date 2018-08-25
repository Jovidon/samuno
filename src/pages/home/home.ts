import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DbProvider } from './../../providers/db/db';
import { AuthProvider } from './../../providers/auth/auth';

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
    private screenOrientation: ScreenOrientation,
    public restApi : RestApiProvider,
    public toastCtrl : ToastController,
    public menuCtrl: MenuController,
    public dbProvider: DbProvider,
    public authProvider: AuthProvider) {
      
      this.menuCtrl.enable(true, 'myMenu');
      this.human = AuthProvider.role;
      this.id = AuthProvider.user_id;
  }
  
  ionViewWillEnter(){
     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidEnter() {
      this.restApi.getData("table/" + AuthProvider.role + "/" + AuthProvider.user_id).then(res => {
        this.dbProvider.synchronizeTabe(res);
        this.showMessage(res);
      })
      .catch(err =>{
        console.log(err);
      })
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

   showMessage(message) {
    let toast = this.toastCtrl.create({
      message : message,
      duration : 1000,
      position : 'middle'
    });
    toast.present();
  }
}
