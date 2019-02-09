import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from './../home/home';
import * as moment from 'moment';

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
    this.currentnews.date = this.changeISOdateToPlain(this.currentnews.date);
    this.lang = this.translate.getDefaultLang();
   this.lang = "uz";
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  private changeISOdateToPlain(isoDate: string): string {
    // For displaying user in plain format we to convert it
    var date = moment(isoDate);
    return date.format('YYYY-MM-DD | HH:mm');
  }
}
