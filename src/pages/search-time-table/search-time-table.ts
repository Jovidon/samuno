import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterApiProvider } from './../../providers/register-api/register-api';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-search-time-table',
  templateUrl: 'search-time-table.html',
})
export class SearchTimeTablePage {

  status: number;
  cafId: number;
  teacherId: number;
  facId: number;
  courseId: number;
  groupId: number; 
  faculty: any;
  course: any;
  group: any;
  cafedra: any;
  teacher: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public registerProvider: RegisterApiProvider,
    private translate : TranslateService,
    private screenOrientation: ScreenOrientation) {
      this.getFaculty();
      this.getCafedra();
  }

  ionViewWillEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    //this.checkBadgeCount();
  }

  goToResult(status) {
    if( status == 1 ){
      this.navCtrl.push('TimeTablePage', {status:1, id: this.teacherId});
    }
    else 
    {
      this.navCtrl.push('TimeTablePage', {status:2, id: this.groupId});
    }
  }

  getFaculty(){
    this.registerProvider.getRegister('getfaculty').then((res)=>{
      this.faculty = res;
    })
    .catch(err=>{
      console.log(err);
    });
  }

  getCourse(){
    this.registerProvider.getRegister('getcourse/' + this.facId).then((res)=>{
      this.course = res;
    })
    .catch((err) =>{
      console.log(err);
    });
  }

  getGroup(){
    this.registerProvider.getRegister('getgroup/' + this.courseId).then((res)=>{
      this.group = res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  getCafedra() {
    this.registerProvider.getRegister('cafedra/' + this.translate.getDefaultLang()).then((res)=>{
      this.cafedra = res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  getTeacher() {
    this.registerProvider.getRegister('teachercafedra/' + this.cafId + "/" + this.translate.getDefaultLang()).then((res)=>{
      this.teacher = res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
