import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-full-news',
  templateUrl: 'full-news.html',
})
export class FullNewsPage {
  currentnews : any;
  lang : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate : TranslateService) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullNewsPage');
  }
 
  getData(){
    this.currentnews = this.navParams.get('data');
    this.lang = this.translate.getDefaultLang();


  }
}
