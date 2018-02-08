import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomePage } from './../home/home'

@IonicPage()
@Component({
  selector: 'page-registr',
  templateUrl: 'registr.html',
})
export class RegistrPage {
  reg: FormGroup;
  idFuculty: number;
  idCours: number;
  idGroup: number[]=[0];
  amount: number;
  selGroup: number[]=[0];
  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder) {
    this.reg = formBuilder.group({
      faculty: ['',Validators.compose([Validators.required])],
      cours: ['',Validators.compose([Validators.required])],
      group: ['',Validators.compose([Validators.required])],
      Name: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.required])],
      Surname: ['',Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.required])]

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentiPage');
  }
  
  onChangeFuculty(){
    for(let i=0; i<20-this.idFuculty*6; i++){
      this.idGroup[i]=this.idCours*100+i+1;
      this.selGroup[i]=i;

    }
  }
  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

}
