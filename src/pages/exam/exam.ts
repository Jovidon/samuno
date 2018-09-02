import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { DbProvider } from './../../providers/db/db';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { AuthProvider } from './../../providers/auth/auth';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {
  exams: any;
  lang: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dbProvider: DbProvider,
    public restProvider: RestApiProvider,
    public authProvider: AuthProvider,
    public toastCtrl: ToastController,
    public translate: TranslateService) {
      this.lang = this.translate.getDefaultLang();
      this.restProvider.getData('getexam/' + AuthProvider.role + '/' + AuthProvider.user_id).then((res)=> {
        this.dbProvider.synchExam(res);
        
      })
      .catch((err) => {
        console.log(err)
      });
      this.dbProvider.getExam().then((res1) => {
        this.exams = res1;
        let toast = this.toastCtrl.create({
          message: res1,
          duration: 2000,
          position: 'middle' 
        });
        toast.present();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
  }

}
