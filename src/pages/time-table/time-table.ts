import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../home/home';
import { DbProvider } from './../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  timetable : any;
  hasChange : string ;
  current : any; 
  lesson : string;
  lang : string ;
  type : string [] = [];
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public toastCtrl : ToastController,
      public translate : TranslateService,
      private screenOrientation: ScreenOrientation,
      public dbProvider: DbProvider) {
        this.type = [];
        this.type[1] = "labelLec";
        this.type[2] = "labelPrac";
        this.type[3] = "labelLab";
        this.lang = this.translate.getDefaultLang();
        var date = new Date();
        let today : number = date.getDay();
        
        this.dbProvider.getTableWithDay(today).then(res => {
          this.current = res;
        });

      this.dbProvider.getTableFromBase().then(res => {
        this.timetable = res;
        this.makeToast(res);
      });
      this.translate.get('labelTodayLessons').subscribe(data =>{
        this.lesson = data;
      });
    

  }

  ionViewWillEnter(){
    // Change orientation to landspace 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  makeToast(message){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 2000,
      position : 'middle',
    });
    toast.present();
  }
  
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  getCurrentTable(day){
    this.dbProvider.getTableWithDay(day).then(res => {
      this.current = res;
    });
  } 

}
