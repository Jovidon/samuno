import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-announts',
  templateUrl: 'announts.html',
})
export class AnnountsPage {
  notes : any;
  lang : string ;
  noInetcon : string;
  conInet : string;

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
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnountsPage');
  }

  
  getNotes(){
    this.getdata.getNotice("announcement")
    .then((data)=>{
     this.notes = data;
     console.log(data);
    })
    .catch(err =>{
      console.log(err);
    });
  }

  getCurrentLang(){
    this.lang = this.translate.getDefaultLang();
  }
   
}
