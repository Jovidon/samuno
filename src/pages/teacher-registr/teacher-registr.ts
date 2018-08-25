import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from './../home/home';
import { RegisterApiProvider } from './../../providers/register-api/register-api';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-teacher-registr',
  templateUrl: 'teacher-registr.html',
})
export class TeacherRegistrPage {
  reg: FormGroup;
  sucreg: string;
  teacher = {role:1, login: "", password: ""};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    private translate : TranslateService,
    private toastCtrl : ToastController,
    private registerProvider: RegisterApiProvider,
    public authProvider: AuthProvider) {
    this.reg = formBuilder.group({
      login: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required])],
    });
    // this.translate.get('successReg').subscribe(data =>{
    //   this.sucreg = data;
    // });
  }
  
  Login(){
    //role teacher -1
    this.registerProvider.postRegister(this.teacher).subscribe(res => {
      if(res){
        let toast = this.toastCtrl.create({
          message : this.sucreg,
          duration : 3000,
          position : 'middle'
        });
        toast.present();
        this.authProvider.register(res.teacherId,1).then(res1 => {
          this.authProvider.getCurrentUser().then(res2 => {
            this.navCtrl.setRoot(HomePage);
            console.log(res);
          });
        });
      }
      else
      {
        console.log("No user!");
      }
    });
    
  }

}
