import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from './../home/home';
import { getRepository, Repository } from 'typeorm';
import { Teacher } from './../../enteties/teacher';
import { TeacherTimeTable } from './../../enteties/teachertimetable';
import { Status } from './../../enteties/status';

@IonicPage()
@Component({
  selector: 'page-teacher-registr',
  templateUrl: 'teacher-registr.html',
})
export class TeacherRegistrPage {
  reg: FormGroup;
  teacherCafedra : number;
  teachers : any;
  teachId : number;
  idTeachers : any []; 
  timetable : any;
  sucreg: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public getdata : RestApiProvider,
    private translate : TranslateService,
    private toastCtrl : ToastController) {
    this.reg = formBuilder.group({
      cafedra: ['',Validators.compose([Validators.required])],
      teacher: ['',Validators.compose([Validators.required])],
    });
    this.idTeachers = [];
    this.translate.get('successReg').subscribe(data =>{
      this.sucreg = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherRegistrPage');
  }

  getTeachers(){
    let lang = this.translate.getDefaultLang();
   
    this.getdata.postTeacher(this.teacherCafedra,lang);
    this.getdata.getTeacher(this.teacherCafedra)
    .then((data)=>{
      this.teachers = data;
    })
    .catch(err =>{
      console.log(err);
    });
  }
  
  async Registr(){
    //role teacher -2 
    let teacherrepo = getRepository('teacher') as Repository<Teacher>;
    let teacher = new Teacher ();
    
    teacher.idTeach = this.teachId;

    let isOldteacher: Teacher = await teacherrepo.findOneById(1);
    if(isOldteacher){

      isOldteacher.idTeach = this.teachId;
      await teacherrepo.save(isOldteacher);
    }
    else
    {
      await teacherrepo.save(teacher);
    }
   
    
    this.getdata.registrPostTeacher(this.teachId.toString());

    this.delay(500);
    let timerpo = getRepository('teachertimetable') as Repository<TeacherTimeTable>;

    this.getdata.getUsers('pages/tables/teachers/' + this.teachId.toString())
    .then( async (data)  =>  {
      this.timetable = data;

      for(let servertime of this.timetable)
      { 
        let timetablenew = new TeacherTimeTable();
        timetablenew.day = servertime.day;
        timetablenew.fan = servertime.fan;
        timetablenew.fan1 = servertime.fan1;
        timetablenew.group = servertime.group;
        timetablenew.type = servertime.type;
        timetablenew.type1 = servertime.type1;
        timetablenew.lessonId = servertime.id;
        timetablenew.room = servertime.room;
        timetablenew.room1 = servertime.room1;
        
        
        await timerpo.save(timetablenew);
      }

    })
    .catch(err =>{
      console.log(err);
    });
    let statusrepo = getRepository('status') as Repository <Status>;
    
     
    let statusnew = new Status();
    statusnew.role = 1;
    await statusrepo.save(statusnew);
    let toast = this.toastCtrl.create({
      message : this.sucreg,
      duration : 3000,
      position : 'middle'
    });
    toast.present();
    this.navCtrl.setRoot(HomePage);
    
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
  }



}
