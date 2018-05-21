import { Component } from '@angular/core';
import { NavController, Platform, LoadingController, ToastController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
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
  isSeenNews : boolean = false;
  isSeenDec  : boolean = false; 
  badgeCnt : number = 0;
  badgeCntNote : number = 0;
  news : any;
  notes : any;
  lennotes : number;
  user : any;
  len : number;
  id : number ;
  key : boolean = false;
  human : number;
  id2 : number = 0;
  constructor(public navCtrl: NavController, 
    public localNotification : LocalNotifications, 
    public platform : Platform,
    private screenOrientation: ScreenOrientation,
    public statusBar : StatusBar,
    public loadingCtrl: LoadingController,
    public getdata : RestApiProvider,
    public toastCtrl : ToastController) {
      this.getLenNotes();
      this.checkBadgeNotes();
    // this.getLenNews();
       // this.checkBadge();
     
    //this.pushNoti();
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
    // this.navCtrl.push('TeachertimetablePage');
    }
    else
    {
     // this.navCtrl.push('TimeTablePage');
     this.navCtrl.push('TimeTablePage');
    }

  
  
  }

 async goToInqueryPage() {
    let human = this.human;
    this.badgeCntNote  = 0;
    
    this.navCtrl.push('AnnountsPage', {human});
    let noticerepo = getRepository('notice') as Repository<Notice>;
    
        let isFirstLaunch = await noticerepo.findOneById(1);
        let notice = new Notice (); 
        this.id2 = this.notes[0].id_not;
    
        if(!isFirstLaunch){
  
          notice.id_note = this.id2;
        
          await noticerepo.save(notice);
        }
        else
        {
          if(this.badgeCntNote > 0){
            isFirstLaunch.id_note = this.id2;
            await noticerepo.save(isFirstLaunch);
          }
            
    
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

  async getLenNotes() {
    let statusrepo = getRepository('status') as Repository <Status>;
    let teacher = await statusrepo.findOne({role:1});
    

    if(teacher){
      this.human = 3;
      this.getdata.getUsers('pages/notice/3')
      .then( async(data)=>{
        this.notes = data;
        this.lennotes = this.notes.length;
      })
      .catch(err =>{
        console.log(err);
      });
    }
    else 
    {
      let userrepo = getRepository('user') as Repository <User>;
      let student  = new User();
      await userrepo.findOne({idFaculty: 1})
      .then(async (data) =>{
        student = data;
      })
      .catch(err=>{
        console.log(err);
      });
      

      this.human = student.idFaculty;
      if(!this.human){
        this.human = 2;
      }
      this.getdata.getUsers('pages/notice/'+ this.human)
      .then( async(data)=>{
        this.notes = data;
        this.lennotes = this.notes.length;
      })
      .catch(err =>{
        console.log(err);
      });
    }  
  }

  async checkBadgeNotes(){
    let noticerepo = getRepository('notice') as Repository<Notice>;

    let isFirstLaunch = await noticerepo.findOneById(1);
    let notice = new Notice (); 
    this.id2 = this.notes[0].id_not;

    if(!isFirstLaunch){
      this.badgeCntNote = this.lennotes;
    }
    else
    {
      this.badgeCntNote = this.id2-isFirstLaunch.id_note;
    }

  }


  

  
}
