import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';


@IonicPage()
@Component({
  selector: 'page-news-announts',
  templateUrl: 'news-announts.html',
})
export class NewsAnnountsPage {
  tab1 : any;
  tab2 : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = 'NewsPage';
    this.tab2 = 'AnnountsPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsAnnountsPage');
  }

  goToHomePage () {
    this.navCtrl.push(HomePage);
  }
}
