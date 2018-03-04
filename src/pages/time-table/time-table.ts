import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { TimeTable } from './../../enteties/time-table';
import { getRepository, Repository } from 'typeorm';
import { User } from './../../enteties/user';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomePage } from './../home/home';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  @ViewChild(Slides) slides: Slides;
  timetable : any;
  user : any;
  timetablesync : any;
  hasChange : string ; 
  monday : any;
  tuesday : any ;
  wednesday : any ;
  thursday : any ;
  friday : any ;
  saturday : any ;
  table : TimeTable [];
  searching : boolean = true;
  plsWait : string;
  lesson : string;

  day : number;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public getdata : RestApiProvider,
      public toastCtrl : ToastController,
      public translate : TranslateService,
      private screenOrientation: ScreenOrientation,
      public loadingCtrl: LoadingController,
      public platform : Platform,
      public localNotification : LocalNotifications) {
    this.getTimeTable();
    this.Synchronize();
    
   this.ionViewDidLoad();
    

   this.translate.get('labelChangingTimeTable').subscribe(data => {
     this.hasChange = data;
   });
   this.translate.get('labelPleaseWait').subscribe(data =>{
     this.plsWait = data;
   });
   this.translate.get('labelTodayLessons').subscribe(data =>{
     this.lesson = data;
   });
   this.pushNoti();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
    
    this.searching = false;
  }

  ionViewWillEnter(){
   
    this.getTimeTable();
    this.makeTimeTable();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    var date = new Date();
    let today : number = date.getDay();
    this.goToSlide(today-1);
    if(today){
      let toast = this.toastCtrl.create({
        message: this.lesson,
        duration: 4000,
        position: 'top',
        cssClass : 'toast' 
      
      });
      toast.present();
    }

  }
  async getTimeTable(){ 
    
    let timetablerepo = getRepository('timetable') as Repository <TimeTable>;
    this.timetable = await timetablerepo.find();
  
  }

  async Synchronize(){ 
    let userrepo = getRepository('user') as Repository <User>;

    this.user = await userrepo.findOneById(1);
    let timetablerepo = getRepository('timetable') as Repository <TimeTable>;
    let student  = new User;
    // this.user = await userrepo.findOneById(1);
     student = await userrepo.findOneById(1);
    
    this.getdata.getUsers('pages/' + student.idGroup.toString() + "_" +student.idFaculty.toString())
    .then( async (data)  =>  {
      
      this.timetablesync = data;
        let isChanged : boolean = false ;
         if(this.timetable.length == this.timetablesync.length){
            for(let i in this.timetable){
              if(this.timetable[i].day != this.timetablesync[i].day || this.timetable[i].fan != this.timetablesync[i].fan || this.timetable[i].teacher != this.timetablesync[i].teacher || this.timetable[i].type != this.timetablesync[i].type || this.timetable[i].lessonId != this.timetablesync[i].id ||this.timetable[i].room!=this.timetablesync[i].room){
                isChanged = true;
                break;
            }
          }
        }

        if(this.timetable.length != this.timetablesync.length || isChanged){
          
          this.makeToast();
          
         for(let time of this.timetable ){
           timetablerepo.remove(time);
         }
         for(let timesync of this.timetablesync){
           let timetablenew = new TimeTable();
           timetablenew.day = timesync.day;
           timetablenew.fan = timesync.fan;
           timetablenew.teacher = timesync.teacher;
           timetablenew.type = timesync.type;
           timetablenew.lessonId = timesync.id;
           timetablenew.room = timesync.room;
           await timetablerepo.save(timetablenew);
         }
         this.ionViewWillEnter();
         }

        
      
    })
    .catch(err =>{
      console.log(err);
    });

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
   
    let timetablerepo = getRepository('timetable') as Repository <TimeTable>;
    this.monday = await timetablerepo.find({day : "Dushanba"});
    this.tuesday = await timetablerepo.find({day : "Seshanba"});
    this.wednesday = await timetablerepo.find({day : "Chorshanba"});
    this.thursday = await timetablerepo.find({day : "Payshanba"});
    this.friday = await timetablerepo.find({day : "Juma"});
    this.saturday = await timetablerepo.find({day : "Shanba"});
  }

  goToSlide(n) {
    this.slides.slideTo(n, 500);
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  pushNoti() {
    var date = new Date()
    date.setDate(date.getDate()+1);
    date.setHours(10);
    date.setMinutes(14);
    date.setSeconds(0);
    this.platform.ready().then(() => {
      this.localNotification.schedule({
        id : 1,
        title : 'UNO',
        text : 'Hello',
        firstAt : date,
        data :  { "id" : 1, "name" : "John"},
        every: 'day',
      });
    });
  }

}
