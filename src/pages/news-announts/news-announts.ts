import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-news-announts',
  templateUrl: 'news-announts.html',
})
export class NewsAnnountsPage {
  note : any;
  lang : string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translate : TranslateService) {
    
      this.note = this.navParams.get('item');

      this.getCurrentLang();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsAnnountsPage');
  }

  goToHomePage () {
    this.navCtrl.setRoot(HomePage);
  }

  getCurrentLang(){
    this.lang = this.translate.getDefaultLang();
  }
}
