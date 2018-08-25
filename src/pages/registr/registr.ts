import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomePage } from './../home/home';
import { RegisterApiProvider } from './../../providers/register-api/register-api';
import { AuthProvider } from './../../providers/auth/auth';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-registr',
  templateUrl: 'registr.html',
})
export class RegistrPage {
  reg: FormGroup;
  name : string;
  surname : string;
  group : any;
  sucreg: string;
  faculty: any;
  course: any; 
  student = {role: 2,fullName: "", Group_id: 0};
  facultyId: number;
  courseId: number;
  constructor(
     public toast : ToastController, 
     public navCtrl: NavController, 
     public navParams: NavParams, 
     formBuilder: FormBuilder, 
     private translate : TranslateService,
     public registerProvider: RegisterApiProvider,
     public authProvider: AuthProvider) {
     
    this.reg = formBuilder.group({
      faculty: ['',Validators.compose([Validators.required])],
      cours: ['',Validators.compose([Validators.required])],
      group: ['',Validators.compose([Validators.required])],
      Name: ['',Validators.compose([Validators.pattern('[a-zA-Z а-яА-Я]*'),Validators.required])],
      Surname: ['',Validators.compose([Validators.pattern('[a-zA-Z а-яА-Я]*'),Validators.required])]
    });
    this.getFaculty();
    // this.translate.get('successReg').subscribe(data =>{
    //   this.sucreg = data;
    // });
    
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
    this.registerProvider.getRegister('getcourse/' + this.facultyId).then((res)=>{
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

  Register() {
    this.student.fullName = this.surname + " " +this.name;
    this.registerProvider.postRegister(this.student).subscribe(res => {
      //AuthProvider.token = res.id_token;
      this.authProvider.register(res.Group_id,2).then(res1=>{
        this.authProvider.getCurrentUser().then(res2 =>{
          this.showMessage(AuthProvider.role + "/" + AuthProvider.user_id);
          this.navCtrl.setRoot(HomePage);
        })
      });
    });
  }
  
  showMessage(message) {
    let toast = this.toast.create({
      message : message,
      duration : 3000,
      position : 'middle'
    });
    toast.present();
  }

}
