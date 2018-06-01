import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, MenuController } from 'ionic-angular';

import { getRepository, Repository } from 'typeorm';
import { Guest } from './../../enteties/guest'; 


import { Network } from '@ionic-native/network';
import { Status } from '../../enteties/status';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  noInternet : boolean = true;
  noInetcon : string;
  conInet : string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private network: Network,
    public toastCtrl : ToastController,
    private platform: Platform,
    private alertCtrl : AlertController,
    public translate: TranslateService,
    public menuCtrl: MenuController) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  goToRegistrPage() {
    this.navCtrl.setRoot('RegistrPage');
  }

 async goToGuest(){
    let guestrepo =getRepository('guest') as Repository <Guest>;
    const guest = new Guest();
    guest.name = "God wills UNO will be beneficial for the development of SB TUIT!";
    await guestrepo.save(guest);
    this.navCtrl.setRoot('GuesthomePage');
  }

 async goToStudent() {
   let statusrepo = getRepository('status') as Repository <Status>;
  
   
    let statusnew = new Status();
    statusnew.role = 2;
    await statusrepo.save(statusnew)

  
   this.navCtrl.setRoot('RegistrPage');
 }

 goToTeacher(){
  this.navCtrl.setRoot('TeacherRegistrPage');
 }

 checkInternet(){
  let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
    this.noInternet = true;
  });
  
  // stop disconnect watch
  disconnectSubscription.unsubscribe();
 }

 check() {
   if(this.noInternet){
    let toast = this.toastCtrl.create({
      message : "No internet Connection!",
      duration : 3000,
      position : 'top'
    });
    toast.present();
   }
 }

}
