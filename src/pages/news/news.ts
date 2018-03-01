import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { getRepository, Repository } from 'typeorm';
import { News } from './../../enteties/news';
import { FullNewsPage } from './../full-news/full-news';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public getdata : RestApiProvider, public toast : ToastController, public translate : TranslateService) {
    this.getNews();
    this.getCurrentLang();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  getNews(){
    this.getdata.getUsers('pages/jsnews')
    .then( async(data)=>{
      this.news = data;
      let newsrepo = getRepository('news') as Repository <News>;
      for(let i=0;i<this.news.length;i++){
          let neww = new News();
          neww.auth = this.news[i].auth;
          neww.auth_ru = this.news[i].auth_ru;
          neww.full = this.news[i].full;
          neww.full_ru = this.news[i].full_ru;
          neww.news_id = this.news[i].news_id;
          neww.short = this.news[i].short
          neww.short_ru = this.news[i].short_ru;
          neww.title = this.news[i].title;
          neww.title_ru = this.news[i].title_ru;
          neww.date = this.news[i].date;
          await newsrepo.save(neww);
      }

    })
    
    .catch(err =>{
      console.log(err);
      let toast = this.toast.create({
        message :"Internet ulanmagan!",
        duration : 3000,
        position : 'middle'
      });
      toast.present();
      this.noInternet = true;
    //  this.getFromBase();
    });


    


  }

  
  async getFromBase(){
    let newsrepo = getRepository('news') as Repository <News>;
        this.localnews = await newsrepo.find();
  }
 
  goToMore(data){
    this.navCtrl.push(FullNewsPage, {data});
  }
 getCurrentLang(){

   this.lang = this.translate.getDefaultLang();

 }

}
