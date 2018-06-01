import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tuit-sb',
  templateUrl: 'tuit-sb.html',
})
export class TuitSbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TuitSbPage');
  }

  goToStaffPage(){
    this.navCtrl.push( 'HeaderStaffPage' );
  }
  goToFacultyPage(){
    this.navCtrl.push( 'FacultyPage' );
  }
  goToCafedraPage(){
    this.navCtrl.push( 'CafedraPage' );
  }
  goToTatusfPage(){
    this.navCtrl.push( 'TatusfPage' );
  }
}
