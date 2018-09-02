import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-header-staff-modol',
  templateUrl: 'header-staff-modol.html',
})
export class HeaderStaffModolPage {
  teacher : any;
  teachId : number;
  current : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public view : ViewController, 
    public translate : TranslateService,
    public restProvider: RestApiProvider) {
    this.teachId = this.navParams.get('id');
    this.restProvider.getData('teacherid/' + this.teachId + '/uz').then((res) =>{
      this.teacher = res;
      console.log(res);
    });

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad HeaderStaffModolPage');
    
    this.current = this.teacher;
  }


  closeModal()
  {
    this.view.dismiss();
  }
  
}
