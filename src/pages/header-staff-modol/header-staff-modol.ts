import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';



@IonicPage()
@Component({
  selector: 'page-header-staff-modol',
  templateUrl: 'header-staff-modol.html',
})
export class HeaderStaffModolPage {
  current : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public view : ViewController, 
    public translate : TranslateService,) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderStaffModolPage');
  }

  getData(){
    this.current = this.navParams.get('p');
  }

  closeModal()
  {
    this.view.dismiss();
  }
  
}
