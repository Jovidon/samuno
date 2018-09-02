import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { Badges } from '../../enteties/badges';
import { DbProvider } from './../../providers/db/db'; 

@IonicPage()
@Component({
  selector: 'page-guesthome',
  templateUrl: 'guesthome.html',
})
export class GuesthomePage {
  badgeCntNews: number = 0;
  baseBadgeCnt: Badges;
  newsIds: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public restApi : RestApiProvider,
    public menuCtrl: MenuController,
    public dbProvider: DbProvider) {
      this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidEnter() {
    this.checkBadgeCount();
  }
  
  goToNewsPage(){
    this.navCtrl.push('NewsPage');
    if(this.newsIds.length > 0) {
      this.dbProvider.updateBadgeCount(this.newsIds[this.newsIds.length-1].id,1);
      this.badgeCntNews = 0;
    }
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
  
  getLenNews(){
    
  }

  checkBadgeCount() {
    this.restApi.getData('newsid').then(res => {
      this.newsIds = res;
    });

    this.dbProvider.getBadgeCount().then(res => {
      if(res) {
        this.baseBadgeCnt = res;
        this.badgeCntNews = 0;
  
        if(!this.baseBadgeCnt.News_id) {
          this.badgeCntNews = this.newsIds.length;
        }
        else {
          for(let item of this.newsIds) {
            if( item.id > this.baseBadgeCnt.News_id )  
              this.badgeCntNews++;
          }
        }
      }
      else
      {
        this.badgeCntNews = this.newsIds.length;
      }
    });
       
  }
}
