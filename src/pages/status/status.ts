import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, MenuController } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { TranslateService } from '@ngx-translate/core';
import { RegisterApiProvider } from './../../providers/register-api/register-api';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  noInternet : boolean = false;
  noInetcon : string;
  conInet : string;
  guest = {role:3};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private network: Network,
    public toastCtrl : ToastController,
    private platform: Platform,
    private alertCtrl : AlertController,
    public translate: TranslateService,
    public menuCtrl: MenuController,
    public registerProvider: RegisterApiProvider,
    public authProvider: AuthProvider) {

      this.translate.get('noInternet').subscribe(data => {
        this.noInetcon = data;
      });
      this.translate.get('conForRegistr').subscribe(data => {
        this.conInet = data;
      });
    this.menuCtrl.enable(false, 'myMenu');
      network.onDisconnect().subscribe(() => {
        });
        setTimeout(() => {
          if (this.network.type === 'none') {
             this.noInternet = true;
            let alert = this.alertCtrl.create({
              title: this.noInetcon,
              subTitle: this.conInet,
              buttons: [{
              
              text: ("Ok")
              }]
              });
              alert.present();
          }
        }, 500);
  }

  goToGuest(){
   if(!this.noInternet){
     this.registerProvider.postRegister(this.guest).subscribe((res) => {
        console.log(res);
        if(res) {
          this.authProvider.register(0,3);
          this.authProvider.getCurrentUser();
        }
     });
     this.navCtrl.setRoot('GuesthomePage');
   }
  }

  goToStudent() {
    this.navCtrl.setRoot('RegistrPage');
  }

  goToTeacher(){
    this.navCtrl.setRoot('TeacherRegistrPage');
 }

}
