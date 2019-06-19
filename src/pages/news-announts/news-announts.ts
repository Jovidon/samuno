import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ToastController} from 'ionic-angular';
import { HomePage } from './../home/home';
import { TranslateService } from '@ngx-translate/core';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-news-announts',
  templateUrl: 'news-announts.html',
})
export class NewsAnnountsPage {
  note : any;
  lang : string;
  group : any;
  groupId : number;
  name : string;
  registeredStudents: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translate : TranslateService,
    public restProvider: RestApiProvider,
    public view : ViewController,
    public toastCtrl: ToastController) {
      this.groupId = this.navParams.get('id');
      this.name = this.navParams.get('grName');
      this.restProvider.getData('getstudent/' + this.groupId).then((res) =>{
        this.group = res;
      });

      this.translate.get('registeredSt').subscribe(res =>{
        this.registeredStudents = res;
      })

      
  }

  goToHomePage () {
    this.navCtrl.setRoot(HomePage);
  }

  getCurrentLang(){
    this.lang = this.translate.getDefaultLang();
  }

  closeModal()
  {
    this.view.dismiss();
  }
  ionViewDidEnter() {
    if(this.group.length)
    this.showMessage(this.registeredStudents);
  }

  showMessage(message) {
    let toast = this.toastCtrl.create({
      message : message,
      position : 'bottom',
      duration : 2000 
    });
    toast.present();
  }
}
