import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TimeTable } from './../../enteties/time-table';
import { getRepository, Repository } from 'typeorm';
import { User } from './../../enteties/user';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  timetable : any;
  user : any;
  timetablesync : any;
  mondayTable : any [];
  tuesdayTable : any [];
  wednesdayTable : any [];
  thursdayTable : any [];
  fridayTable : any [];
  saturdayTable : any [];
  hasChange : string ; 
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public getdata : RestApiProvider,
      public toastCtrl : ToastController,
      public translate : TranslateService) {
    this.getTimeTable();
    this.Synchronize();
   
    this.mondayTable = [];
    this.tuesdayTable = [];
    this.wednesdayTable = [];
    this.thursdayTable = [];
    this.fridayTable = [];
    this.saturdayTable = [];
   // this.makeTimeTable();

   this.translate.get('labelChangingTimeTable').subscribe(data => {
     this.hasChange = data;
   });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
  }

  ionViewWillEnter(){
    this.getTimeTable();
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
              if(this.timetable[i].day != this.timetablesync[i].day || this.timetable[i].fan != this.timetablesync[i].fan || this.timetable[i].teacher != this.timetablesync[i].teacher || this.timetable[i].type != this.timetablesync[i].type || this.timetable[i].lessonId != this.timetablesync[i].id){
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
      

     
    }) ;
    toast.present();
  }

  makeTimeTable(){
    for(let i in this.timetable) {
      if(this.timetable[i].day == "Dushanba"){
        this.mondayTable.push(this.timetable[i]);
      }
      if(this.timetable[i].day == "Seshanba"){
        this.tuesdayTable.push(this.timetable[i]);
      }
      if(this.timetable[i].day == "Chorshanba"){
        this.wednesdayTable.push(this.timetable[i]);
      }
      if(this.timetable[i].day == "Payshanba"){
        this.thursdayTable.push(this.timetable[i]);
      }
      if(this.timetable[i].day == "Juma"){
        this.fridayTable.push(this.timetable[i]);
      }
      else
      {
        this.saturdayTable.push(this.timetable[i]);
      }
      
    }

    /*for(let j=0; j<this.mondayTable.length; j++ ){
        for(let i=j;i<this.mondayTable.length; i++){
          if(this.mondayTable[j].lessonId > this.mondayTable[i].lessonId)
          {
              this.Swap(this.mondayTable[i],this.mondayTable[j]);
          }
        }
    
       

    }
    
   */ 

    
  }

  Swap(a : any, b : any){

    let c : any;
    c = a;
    a = b;
    b = c;

  }
}
