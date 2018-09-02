import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translate : TranslateService,
    public restProvider: RestApiProvider,
    public view : ViewController) {
      this.groupId = this.navParams.get('id');
      this.restProvider.getData('getstudent/' + this.groupId).then((res) =>{
        this.group = res;
      });
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
}
