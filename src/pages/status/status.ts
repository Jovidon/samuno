import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrPage }  from './../registr/registr';
import { getRepository, Repository } from 'typeorm';
import { Guest } from './../../enteties/guest'; 
import { HomePage } from './../home/home'; 
import { GuesthomePage } from './../guesthome/guesthome';
import { Status } from '../../enteties/status';
import { TeacherRegistrPage } from './../teacher-registr/teacher-registr';


@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  goToRegistrPage() {
    this.navCtrl.setRoot(RegistrPage);
  }

 async goToGuest(){
    let guestrepo =getRepository('guest') as Repository <Guest>;
    const guest = new Guest();
    guest.name = "God wills UNO will be beneficial for the development of SB TUIT!";
    await guestrepo.save(guest);
    this.navCtrl.setRoot(GuesthomePage);
  }

 async goToStudent() {
   let statusrepo = getRepository('status') as Repository <Status>;
  
   
    let statusnew = new Status();
    statusnew.role = 2;
    await statusrepo.save(statusnew)

  
   this.navCtrl.setRoot(RegistrPage);
 }

 async goToTeacher(){
  let statusrepo = getRepository('status') as Repository <Status>;
 
  
   let statusnew = new Status();
   statusnew.role = 1;
   await statusrepo.save(statusnew)

  this.navCtrl.setRoot(TeacherRegistrPage);
 }

}
