import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getRepository, Repository } from 'typeorm';
import { User } from './../../enteties/user';

@IonicPage()
@Component({
  selector: 'page-inquery',
  templateUrl: 'inquery.html',
})
export class InqueryPage {

  name : string ;
  surname : string;
  user : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getUser();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InqueryPage');
  }

  async getUser(){

    let userrepo = getRepository('user') as Repository <User>;
    

    this.user = await userrepo.find();
  }

}
