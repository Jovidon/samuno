import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApplicantStatisticsPage } from '../applicant-statistics/applicant-statistics';
import { TeacherStatisticsPage } from '../teacher-statistics/teacher-statistics';
import { StudentStatisticsPage } from '../student-statistics/student-statistics';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  goToStudentStPage(){
    this.navCtrl.push(StudentStatisticsPage);
  }

  goToTeacherStPage(){
    this.navCtrl.push(TeacherStatisticsPage);
  }

  goToApplicantStPage(){
    this.navCtrl.push(ApplicantStatisticsPage);
  }
  
   ionViewDidLoad() {
    
       }

}
