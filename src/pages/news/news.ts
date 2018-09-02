import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, LoadingController} from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Network } from '@ionic-native/network';

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
  noInetcon : string;
  conInet : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata : RestApiProvider, 
    public toast : ToastController, 
    public translate : TranslateService,
    public loadingCtrl : LoadingController,
    private network: Network,
    private alertCtrl : AlertController) {
     
   
   this.getCurrentLang();
    // this.lang = "uz";
    this.translate.get('labelPleaseWait').subscribe(data =>{
      this.pleaseWait = data;
    });
    this.translate.get('noInternet').subscribe(data =>{
      this.noInetcon = data;
    });
    this.translate.get('conForNews').subscribe(data =>{
      this.conInet = data;
    });
    

    setTimeout(() => {
      if (this.network.type === 'none') {
        let alert = this.alertCtrl.create({
          title: this.noInetcon,
          subTitle: this.conInet,
          buttons: [{
          
          text: ("Ok")
          }]
          });
          alert.present();
      }
    }, 500);
    let loading = this.loadingCtrl.create({
      content : this.pleaseWait,
      duration : 1000
    });
    loading.present();
  }

  ionViewDidEnter(){
    console.log('ionViewDidLoad NewsPage');
    this.getNews();
  }

  getNews(){
    this.getdata.getData("news").then((res) =>{
      this.news = res;
    })
    .catch(err => {
      console.log(err);
    })
  }
  
 
  goToMore(data){
    let count:number = data.viewCount + 1;
    this.getdata.getData('newscount/'+count+"/"+data.id);
    this.navCtrl.push('FullNewsPage', {data});
  }

  getCurrentLang(){

   this.lang = this.translate.getDefaultLang();

 }

}
