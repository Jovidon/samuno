import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageRepository } from './../../enteties/language';
import { getRepository, Repository } from 'typeorm';
import { TranslateService } from '@ngx-translate/core';
import { LanguageProvider } from './../../providers/language/language';

@IonicPage()
@Component({
  selector: 'page-guesthome',
  templateUrl: 'guesthome.html',
})
export class GuesthomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private translate : TranslateService,) {
    
      //this.getLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuesthomePage');
  }
  
  goToNewsPage(){
    this.navCtrl.push('NewsPage');
  }

  goToTuitSbPage(){
    this.navCtrl.push('TuitSbPage');
  }

  goToStatisticsPage(){
    this.navCtrl.push('StatisticsPage');
  }

  goToContactsPage(){
    this.navCtrl.push('ContactsPage');
  }

  
}
