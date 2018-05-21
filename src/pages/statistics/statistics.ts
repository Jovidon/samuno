import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,private screenOrientation: ScreenOrientation) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  goToStudentStPage(){
    this.navCtrl.push('StudentStatisticsPage');
  }

  goToTeacherStPage(){
    this.navCtrl.push('TeacherStatisticsPage');
  }

  goToApplicantStPage(){
    this.navCtrl.push('ApplicantStatisticsPage');
  }
  
   ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
       }
   ionViewDidLoad() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
       }
}
