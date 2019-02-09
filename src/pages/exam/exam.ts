import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { DbProvider } from './../../providers/db/db';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { AuthProvider } from './../../providers/auth/auth';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {
  exams: any;
  lang: string;
  noExam: string;
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

      this.translate.get('noExamsYet').subscribe(res => {
        this.noExam = res;
      });
  }

  ionViewDidEnter() {
    this.dbProvider.getExam().then((res1) => {
      this.exams = res1;
      for(let i=0; i<this.exams.length;i++)
        {
          this.exams[i].date = this.changeISOdateToPlain(this.exams[i].date);
        }
    });
    if(!this.exams.length) {
      this.showMessage(this.noExam);
    }
  }

  showMessage(message) {
    let toast = this.toastCtrl.create({
      message : message,
      position : 'bottom',
      duration : 2000 
    });
    toast.present();
  }

  private changeISOdateToPlain(isoDate: string): string {
    // For displaying user in plain format we to convert it
    var date = moment(isoDate);
    return date.format('YYYY-MM-DD | HH:mm');
  }

}
