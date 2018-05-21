import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { Notice } from './../../enteties/notice';
import { getRepository, Repository } from 'typeorm';

@IonicPage()
@Component({
  selector: 'page-announts',
  templateUrl: 'announts.html',
})
export class AnnountsPage {
  notes : any;
  human : any;
  lang : string ;
  lastId : number = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public getdata : RestApiProvider,
    public translate : TranslateService) {
      this.human = this.navParams.get('human');
      if(!this.human)
        this.human = 2;

      this.getLenNews();
      
      this.getCurrentLang();
      
      this.getBase();
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnountsPage');
  }

  async getBase(){
    let noticerepo = getRepository('notice') as Repository<Notice>;
    
    let isFirstLaunch = await noticerepo.findOneById(1);
    this.lastId = isFirstLaunch.id_note;
  }

  
  getLenNews(){
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
