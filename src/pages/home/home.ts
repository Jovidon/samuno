import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { TimeTablePage } from '../time-table/time-table';
import { InqueryPage } from '../inquery/inquery';
import { TuitSbPage } from '../tuit-sb/tuit-sb';
import { StatisticsPage } from '../statistics/statistics';
import { ContactsPage } from '..//contacts/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNewsPage(){
    this.navCtrl.push(NewsPage);
  }

  goToTimeTablePage(){
    this.navCtrl.push(TimeTablePage);
  }

  goToInqueryPage() {
    this.navCtrl.push(InqueryPage);
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
