import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getRepository, Repository } from 'typeorm';
import { User } from './../../enteties/user';
import { RestApiProvider } from './../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-inquery',
  templateUrl: 'inquery.html',
})
export class InqueryPage {

  name : string ;
  surname : string;
  user : any;
  human : number;
  notes : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getdata : RestApiProvider) {
   // this.human = this.navParams.get('human');
    //this.getLenNews();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InqueryPage');
  }

  // getLenNews(){
  //   this.getdata.getUsers('pages/notice/3')
  //   .then( async(data)=>{
  //    this.notes = data;
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   });
  // }

  



}
