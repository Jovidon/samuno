import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { Notice } from './../../enteties/notice';
import { getRepository, Repository } from 'typeorm';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Network } from '@ionic-native/network';
import { User } from './../../enteties/user';
import { Status } from './../../enteties/status';

@IonicPage()
@Component({
  selector: 'page-announts',
  templateUrl: 'announts.html',
})
export class AnnountsPage {
  notes : any;
  human : any;
  lang : string ;
  noInetcon : string;
  conInet : string;
  key : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public getdata : RestApiProvider,
    public translate : TranslateService,
    private network: Network,
    private alertCtrl : AlertController) {

      this.translate.get('noInternet').subscribe(data =>{
        this.noInetcon = data;
      });
      this.translate.get('conForNote').subscribe(data =>{
        this.conInet = data;
      });
      //this.human = 3;
      this.human = this.navParams.get('human');
     

      this.getNotes();

      setTimeout(() => {
        if (this.network.type == 'none') {
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
      
     this.getCurrentLang();
    // this.lang ="uz";
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnountsPage');
  }

  
  getNotes(){
    this.getdata.getUsers('pages/notice/'+this.human)
    .then( async(data)=>{
     this.notes = data;
    })
    .catch(err =>{
      console.log(err);
    });
  }

  getCurrentLang(){
    this.lang = this.translate.getDefaultLang();
  }

  goToFull(item) {
    this.navCtrl.push('NewsAnnountsPage', {item});
  }
   
}
