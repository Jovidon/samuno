import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

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
    public getdata : RestApiProvider,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad GuesthomePage');
  }
  
 async goToNewsPage(){
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
