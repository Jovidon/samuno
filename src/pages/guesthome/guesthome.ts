import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageRepository } from './../../enteties/language';
import { getRepository, Repository } from 'typeorm';
import { TranslateService } from '@ngx-translate/core';
import { LanguageProvider } from './../../providers/language/language';
import { News } from './../../enteties/news';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
//import { TimeTablePage } from './../time-table/time-table'; 

@IonicPage()
@Component({
  selector: 'page-guesthome',
  templateUrl: 'guesthome.html',
})
export class GuesthomePage {
  isSeenNews : boolean = false;
  badgeCnt : number = 0;
  user : any;
  len : number;
  id : number = 0;
  size : number = 0;

  news : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private translate : TranslateService,
    public getdata : RestApiProvider) {
      this.getLenNews();
      this.checkBadge();
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad GuesthomePage');
  }
  
  goToNewsPage(){
    this.navCtrl.push('NewsPage');
    this.badgeCnt = 0;
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

  async checkBadge(){
    let newsrepo = getRepository('news') as Repository<News>;

    let isFirstLaunch = await newsrepo.findOneById(1);
    let newsId = new News (); 
    this.id = this.news[0].id_news;

    if(!isFirstLaunch){
      this.badgeCnt = this.len;
      newsId.id_news = this.id;
      await newsrepo.save(newsId);
    }
    else
    {
      this.badgeCnt = this.id-isFirstLaunch.id_news;
      if(this.badgeCnt > 0){
        isFirstLaunch.id_news = this.id;
        await newsrepo.save(isFirstLaunch);
      }
    }

  }
  
  getLenNews(){
    this.getdata.getUsers('pages/news')
    .then( async(data)=>{
      this.news = data;
      this.len = this.news.length;
    })
    .catch(err =>{
      console.log(err);
    });
  }
}
