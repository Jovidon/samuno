import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomePage } from './../home/home'
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TimeTablePage } from './../time-table/time-table';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'path';
import { TimeTable } from './../../enteties/time-table';
import { getRepository, Repository } from 'typeorm';
import { User } from './../../enteties/user';

@IonicPage()
@Component({
  selector: 'page-registr',
  templateUrl: 'registr.html',
})
export class RegistrPage {
  reg: FormGroup;
  idFuculty: number;
  idCours: number;
  idGroup: number[]=[0];
  amount: number;
  selGroup: number[]=[0];
  name : string;
  surname : string;
  serverdata : any;
  groups : any;
  currentgroup : string [];

  constructor( public toast : ToastController, public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, public getdata : RestApiProvider, public http : HttpClient) {
    this.reg = formBuilder.group({
      faculty: ['',Validators.compose([Validators.required])],
      cours: ['',Validators.compose([Validators.required])],
      group: ['',Validators.compose([Validators.required])],
      Name: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.required])],
      Surname: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.required])]

    });
    this.currentgroup = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentiPage');
  }
  
  onChangeFuculty(){
    for(let i=0; i<20-this.idFuculty*6; i++){
      this.idGroup[i]=this.idCours*100+i+1;
      this.selGroup[i]=i;

    }
  }
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  
  getGroup(){
    this.getdata.getGroup(this.idFuculty);
    this.getdata.getUsers(this.idFuculty.toString())
    .then(data => {
      this.groups = data;
    })
    .catch(err =>{
      console.log(err);
    });
  }

  async Registr(){
    this.getdata.submit(this.name.toString(),this.surname.toString(),this.idFuculty.toString(),this.idCours.toString(), this.amount.toString())
   
  await this.delay(500);
    this.getData();
  
  }
 async  getData () {
  

    
    this.getdata.getUsers(this.amount + "_" +this.idFuculty.toString())
    .then( async (data)  =>  {
      this.serverdata = data;
      let timetablerepo = getRepository('timetable') as Repository <TimeTable>;
      for (let servertime of this.serverdata){
        let time = new TimeTable();
        
        time.fan = servertime.fan;
        time.teacher = servertime.teacher;
        time.day = servertime.day;
        time.type = servertime.type;
        time.lessonId = servertime.id;
        time.room = servertime.room;
        await timetablerepo.save(time);
      }
    })
    .catch(err =>{
      console.log(err);
    });
    
    
    let userrepo = getRepository('user') as Repository <User>;
    let user = new User();
    user.name = this.name;
    user.surname = this.surname;
    user.idGroup = this.amount;
    user.idFaculty = this.idFuculty;
    await userrepo.save(user);
    

    let toast = this.toast.create({
      message : "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
      duration : 3000,
      position : 'middle'
    });
    toast.present();
  

      this.navCtrl.setRoot(HomePage);

  }

      delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
    
  }

  generateGroup(){
    let k = 0;
    for(let group of this.groups){
      if(group.kurs==this.idCours){
        this.currentgroup[k] = group.nomer;
        k++;
      }
    }
  }

}
