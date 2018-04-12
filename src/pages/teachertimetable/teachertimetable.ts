import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { getRepository, Repository } from 'typeorm';
import { Teacher } from './../../enteties/teacher';
import { TeacherTimeTable } from './../../enteties/teachertimetable';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-teachertimetable',
  templateUrl: 'teachertimetable.html',
})
export class TeachertimetablePage {
  @ViewChild(Slides) slides: Slides;
 
  timetable : any ;
  timetablesync : any;
  hasChange : string;
  monday : any;
  tuesday : any ;
  wednesday : any ;
  thursday : any ;
  friday : any ;
  saturday : any ;
  lesson : string;
  teachId : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public getdata : RestApiProvider,
    public toastCtrl : ToastController,
    public translate : TranslateService,
    private screenOrientation: ScreenOrientation) {
      this.translate.get('labelChangingTimeTable').subscribe(data => {
        this.hasChange = data;
      });
      this.translate.get('labelTodayLessons').subscribe(data =>{
        this.lesson = data;
      });
    //  this.getTimeTable();
      this.Synchronize();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachertimetablePage');
  }

  async getTimeTable(){ 
    
    let timetablerepo = getRepository('teachertimetable') as Repository <TeacherTimeTable>;
    this.timetable = await timetablerepo.find();
  
  }

  async Synchronize(){ 

    let timetablerepo = getRepository('teachertimetable') as Repository <TeacherTimeTable>;
    let teacherrepo = getRepository('teacher') as Repository<Teacher>;
    this.getTimeTable();
    

    let teacher = await teacherrepo.findOneById(1);
    
      this.getdata.registrPostTeacher(teacher.idTeach.toString());
      this.delay(500);
    
    this.getdata.getUsers('pages/tables/teachers/' + teacher.idTeach.toString())
    .then( async (data)  =>  {
      
      this.timetablesync = data;
    
        let isChanged : boolean = false ;
         if(this.timetable.length == this.timetablesync.length){
            for(let i in this.timetable){
              if(this.timetable[i].day != this.timetablesync[i].day || this.timetable[i].fan != this.timetablesync[i].fan ||this.timetable[i].fan1 != this.timetablesync[i].fan1  || this.timetable[i].group != this.timetablesync[i].group || this.timetable[i].type != this.timetablesync[i].type ||this.timetable[i].type1 != this.timetablesync[i].type1 || this.timetable[i].lessonId != this.timetablesync[i].id ||this.timetable[i].room!=this.timetablesync[i].room||this.timetable[i].room1!=this.timetablesync[i].room1){
                isChanged = true;
                break;
            }
          }
        }

        if(this.timetable.length != this.timetablesync.length || isChanged){
          
          if(this.timetable.length && this.timetablesync.length){
            this.makeToast();
            
           for(let time of this.timetable ){
             timetablerepo.remove(time);
           }

          }
         

         for(let timesync of this.timetablesync){
           let timetablenew = new TeacherTimeTable();
           timetablenew.day = timesync.day;
           timetablenew.fan = timesync.fan;
           timetablenew.fan1 = timesync.fan1;
           timetablenew.group = timesync.group;
           timetablenew.type = timesync.type;
           timetablenew.type1 = timesync.type1;
           timetablenew.lessonId = timesync.id;
           timetablenew.room = timesync.room;
           timetablenew.room1 = timesync.room1;
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
    
     let timetablerepo = getRepository('teachertimetable') as Repository <TeacherTimeTable>;
     this.monday = await timetablerepo.find({day : "Dushanba"});
     this.tuesday = await timetablerepo.find({day : "Seshanba"});
     this.wednesday = await timetablerepo.find({day : "Chorshanba"});
     this.thursday = await timetablerepo.find({day : "Payshanba"});
     this.friday = await timetablerepo.find({day : "Juma"});
     this.saturday = await timetablerepo.find({day : "Shanba"});
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

   goToSlide(n){
    this.slides.slideTo(n, 500);
  }

 
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
  }
}
