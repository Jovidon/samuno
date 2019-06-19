import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from './../home/home'

@IonicPage()
@Component({
  selector: 'page-cafedra-info',
  templateUrl: 'cafedra-info.html',
})
export class CafedraInfoPage {
  lang: string;
  current : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams , 
    public view : ViewController, 
    public translate : TranslateService) {
    this.getData();
    // this.lang = this.translate.getDefaultLang();
    // if(this.lang == 'uz') {
    //   this.current.cafedraName = "Kafedra";
    // }
    // else
    // this.current.cafedraName = "Кафедра";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CafedraInfoPage');
  }
  getData(){
    this.current = this.navParams.get('p');
  }
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
