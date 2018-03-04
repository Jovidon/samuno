import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TuitSbPage } from '../tuit-sb/tuit-sb';
import { StatisticsPage } from '../statistics/statistics';
import { ContactsPage } from '..//contacts/contacts';
import { NewsPage } from '../news/news';

@IonicPage()
@Component({
  selector: 'page-guesthome',
  templateUrl: 'guesthome.html',
})
export class GuesthomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuesthomePage');
  }
  
  goToNewsPage(){
    this.navCtrl.push(NewsPage);
  }

  goToTuitSbPage(){
    this.navCtrl.push(TuitSbPage);
  }

  goToStatisticsPage(){
    this.navCtrl.push(StatisticsPage);
  }

  goToContactsPage(){
    this.navCtrl.push(ContactsPage);
  }

}
