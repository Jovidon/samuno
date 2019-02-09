import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DbProvider } from './../../providers/db/db';
import { AuthProvider } from './../../providers/auth/auth';
import { Badges } from '../../enteties/badges';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  badgeCntNews: number = 0;
  badgeCntNotes: number = 0;
  newsIds: any;
  notesIds: any;
  baseBadgeCnt: Badges;
  constructor(public navCtrl: NavController, 
    private screenOrientation: ScreenOrientation,
    public restApi : RestApiProvider,
    public toastCtrl : ToastController,
    public menuCtrl: MenuController,
    public dbProvider: DbProvider,
    public authProvider: AuthProvider) {
      this.menuCtrl.enable(true, 'myMenu');
  }
  
  ionViewWillEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidEnter() {
      this.restApi.getData("table/" + AuthProvider.role + "/" + AuthProvider.user_id).then(res => {
        this.dbProvider.synchronizeTabe(res);
      })
      .catch(err =>{
        console.log(err);
      });
      this.checkBadgeCount();
  }

  checkBadgeCount() {
    this.restApi.getData('newsid').then(res => {
      this.newsIds = res;
    });

    this.restApi.getData('announcementid/' + AuthProvider.role).then(res => {
      this.notesIds = res;
    });

    this.dbProvider.getBadgeCount().then(res => {
      if(res) {
        this.baseBadgeCnt = res;
        
          this.badgeCntNews = 0;
          this.badgeCntNotes = 0;
    
          if(!this.baseBadgeCnt.News_id) {
            this.badgeCntNews = this.newsIds.length;
          }
          else {
            for(let item of this.newsIds) {
              if( item.id > this.baseBadgeCnt.News_id )  
                this.badgeCntNews++;
            }
          }
    
          if(!this.baseBadgeCnt.Announts_id)
            this.badgeCntNotes = this.notesIds.length;
          else 
            {
              for(let item of this.notesIds) {
                if( item.id > this.baseBadgeCnt.Announts_id) 
                  this.badgeCntNotes++;
              }
            }
      }
      else
      {
        this.badgeCntNews = this.newsIds.length;
        this.badgeCntNotes = this.notesIds.length;
      }
    });
       
  }

  goToNewsPage(){
    this.navCtrl.push('NewsPage');
    if(this.newsIds.length > 0) {
      this.dbProvider.updateBadgeCount(this.newsIds[this.newsIds.length-1].id,1).then((res) => {
        this.badgeCntNews = 0;
      });
    }
  }

  goToTimeTablePage(){
     this.navCtrl.push('TimeTablePage');
  }

  goToNotePage() {
    this.navCtrl.push('AnnountsPage');
    if(this.notesIds.length > 0) {
      this.dbProvider.updateBadgeCount(this.notesIds[this.notesIds.length-1].id,2).then((res) =>{
        this.badgeCntNotes = 0;
      });
    }
  }

  goToTuitSbPage(){
    this.navCtrl.push('TuitSbPage');
  }

  goToSearchPage(){
    this.navCtrl.push('SearchTimeTablePage');
  }

  goToExamPage(){
    this.navCtrl.push('ExamPage');
  }

   showMessage(message) {
    let toast = this.toastCtrl.create({
      message : message,
      duration : 1000,
      position : 'middle'
    });
    toast.present();
  }
}
