import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../home/home';
import { DbProvider } from './../../providers/db/db';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

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
  days: boolean [] = []; 
  status: number;
  id: number;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public toastCtrl : ToastController,
      public translate : TranslateService,
      private screenOrientation: ScreenOrientation,
      public dbProvider: DbProvider,
      public restApi: RestApiProvider,
      public modalCtrl: ModalController) {
        this.clearDays();
        this.type = [];
        this.type[1] = "labelLec";
        this.type[2] = "labelPrac";
        this.type[3] = "labelLab";
        this.lang = 'uz';
        var date = new Date();
        let today : number = date.getDay();
        this.status = this.navParams.get('status');
        this.days[today] = false;
        if(this.status) {
          this.id = this.navParams.get('id');
          this.restApi.getData("tablebyday/" + this.status + "/" + this.id + "/" + today).then(res => {
            this.current = res;
          })
          .catch(err =>{
            console.log(err);
          });
        }
        else {
          this.dbProvider.getTableWithDay(today).then(res => {
            this.current = res;
          });
        }
        
      this.translate.get('labelTodayLessons').subscribe(data =>{
        this.lesson = data;
      });
    

  }

  clearDays() {
    for(let i=1; i<=6; i++) 
    {
      this.days[i] = true;
    }
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
    this.clearDays();
    this.days[day] = false;
    if(this.status) {
      this.restApi.getData("tablebyday/" + this.status + "/" + this.id + "/" + day).then(res => {
        this.current = res;
      })
      .catch(err =>{
        console.log(err);
      });
    }
    else {
      this.dbProvider.getTableWithDay(day).then(res => {
        this.current = res;
      });
    }
  } 

  indentifyPair(lesson) {
    let color;
    if( lesson.isEven != null ) {
      color = "#f53d3d";
    }
    else
      color = "#f4f4f4";

    return color;
  }
  
  showTeacherInfo (id: number, classes: string, val) {
    if(val) {
      let a =   this.modalCtrl.create('HeaderStaffModolPage', {id}, {
        cssClass: classes,
      });
      console.log(id);
       a.present();
    }
    else {
      let a =   this.modalCtrl.create('NewsAnnountsPage', {id}, {
        cssClass: classes,
      });
      console.log("hey");
      console.log(id);
       a.present();
    }
  }
}
