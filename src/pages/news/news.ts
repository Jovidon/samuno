import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, LoadingController} from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: any;
  localnews : any;
  noInternet : boolean = false ;
  lang : string ;
  pleaseWait : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata : RestApiProvider, 
    public toast : ToastController, 
    public translate : TranslateService,
    public loadingCtrl : LoadingController) {
     
    this.getNews();
    this.getCurrentLang();
    this.translate.get('labelPleaseWait').subscribe(data =>{
      this.pleaseWait = data;
    });
    let loading = this.loadingCtrl.create({
      content : this.pleaseWait,
      duration : 1000
    });
    loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');

  }

  getNews(){
    this.getdata.getUsers('pages/news')
    .then( async(data)=>{
      this.news = data;})
    .catch(err =>{
      console.log(err);
    });
  }

  parseJson(data: any): Promise<any> {
    return JSON.parse(data)
  }
  
 
  goToMore(data){
    this.navCtrl.push('FullNewsPage', {data});
  }

  getCurrentLang(){

   this.lang = this.translate.getDefaultLang();

 }

}
