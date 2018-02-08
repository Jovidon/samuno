import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrPage } from './../registr/registr'



@IonicPage()
@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html',
})
export class SelectLanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  }
  goToRegistrPage(){
    this.navCtrl.push(RegistrPage);
  }

}
