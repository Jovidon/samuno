import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  timetable : any;
  timetablesync : any;
  hasChange : string ; 
  monday : any;
  tuesday : any ;
  wednesday : any ;
  thursday : any ;
  friday : any ;
  saturday : any ;
  current : any; 
  lesson : string;
  key : boolean = false;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public getdata : RestApiProvider,
      public toastCtrl : ToastController,
      public translate : TranslateService,
      private screenOrientation: ScreenOrientation) {
    this.getTimeTable();
    this.Synchronize();
    

   this.translate.get('labelChangingTimeTable').subscribe(data => {
     this.hasChange = data;
   });
  
   this.translate.get('labelTodayLessons').subscribe(data =>{
     this.lesson = data;
   });

  }

  ionViewWillEnter(){
   
    this.getTimeTable();
    this.makeTimeTable();
    // Change orientation to landspace 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    
    var date = new Date();
    let today : number = date.getDay();
    
    if(today){
      let toast = this.toastCtrl.create({
        message: this.lesson,
        duration: 2000,
        position: 'bottom',
      
      });
      toast.present();
    }

  }
  async getTimeTable(){ 
    // Get from rest-api
  }

  async Synchronize(){ 
    // Synchronize time table with base
  }


  makeToast(){
    let toast = this.toastCtrl.create({
      message : this.hasChange,
      duration : 2000,
      position : 'middle',
    });
    toast.present();
  }
  
  async makeTimeTable() {

  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  getCurrentTable(day){
    switch(day){
      case 1: this.current = this.monday; break;
      case 2: this.current = this.tuesday; break;
      case 3: this.current = this.wednesday; break;
      case 4: this.current = this.thursday; break;
      case 5: this.current = this.friday; break;
      case 6: this.current = this.saturday; break;
    }
  } 

}
