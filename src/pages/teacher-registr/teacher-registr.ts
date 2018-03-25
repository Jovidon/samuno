import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-teacher-registr',
  templateUrl: 'teacher-registr.html',
})
export class TeacherRegistrPage {
  reg: FormGroup;
  teacherCafedra : number;
  teacherFullName : string;
  teachers : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public getdata : RestApiProvider) {
    this.reg = formBuilder.group({
      cafedra: ['',Validators.compose([Validators.required])],
      teacher: ['',Validators.compose([Validators.required])],
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherRegistrPage');
  }

  getTeachers(){
    this.getdata.getTeachers(this.teacherCafedra);
    this.getdata.getUsers(this.teacherCafedra)
    .then((data)=>{
      this.teachers = data;
    })
    .catch(err =>{
      console.log(err);
    });
  }

}
