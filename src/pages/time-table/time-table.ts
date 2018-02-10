import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimeTable } from './../../enteties/time-table';
import { getRepository, Repository } from 'typeorm';


@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  timetable : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.getTimeTable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
  }
  
  getTimeTable(){ 
    let timetablerepo = getRepository('timetable') as Repository <TimeTable>;

    this.timetable = timetablerepo.find();


  }
}
