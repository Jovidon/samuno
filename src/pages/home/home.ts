import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { getRepository, Repository } from 'typeorm';
import { Status } from './../../enteties/status';
import { News } from './../../enteties/news';
import { User } from './../../enteties/user';
import { Notice } from './../../enteties/notice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  badgeCnt : number = 0;
  news : any;
  len : number;
  id : number ;
  human : number;
  key : boolean;
  constructor(public navCtrl: NavController, 
    public localNotification : LocalNotifications,
    private screenOrientation: ScreenOrientation,
    public getdata : RestApiProvider,
    public toastCtrl : ToastController,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(true, 'myMenu');
      this.getLenNews();
      this.getUser();
      this.checkBadge();
  }
  
  ionViewWillEnter(){
     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   }

  async goToNewsPage(){
    this.navCtrl.push('NewsPage');
    
    let newsrepo = getRepository('news') as Repository<News>;
    
        let isFirstLaunch = await newsrepo.findOneById(1);
        let newsId = new News (); 
        this.id = this.news[0].id_news;
    
        if(!isFirstLaunch){
          newsId.id_news = this.id;
          await newsrepo.save(newsId);
        }
        else
        {
          if(this.badgeCnt > 0){
            isFirstLaunch.id_news = this.id;
            await newsrepo.save(isFirstLaunch);
          }
        }
    

    this.badgeCnt = 0;
  }

  async goToTimeTablePage(){
    let statusrepo = getRepository('status') as Repository <Status>;
    let teacher = await statusrepo.findOne({role:1});
    
    if(teacher){
      this.navCtrl.push('TeachertimetablePage');
    }
    else
    {
     this.navCtrl.push('TimeTablePage');
    }
  
  }

  goToInqueryPage() {
      let human = this.human;
      this.navCtrl.push('AnnountsPage', {human});
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

    if(!isFirstLaunch)
      this.badgeCnt = this.len;
    
    else
    
      this.badgeCnt = this.id-isFirstLaunch.id_news;
   
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

  async getUser() {
    let statusrepo = getRepository('status') as Repository <Status>;
    let teacher = await statusrepo.findOne({role:1});
    if(teacher){
      this.human = 3;
    }
    else 
    {
      let userrepo = getRepository('user') as Repository <User>;
      let student  = new User();
      await userrepo.findOne({idFaculty: 1})
      .then(async (data) =>{
        student = data;
        if(student)
          this.key = true;
      })
      .catch(err=>{
        console.log(err);
      });
          
      if(this.key){
        this.human = 1;
      }
      else 
        this.human = 2;
    }  
     
  }
  
}
