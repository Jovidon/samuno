import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrPage } from './../registr/registr'
import { Language } from './../../model/language-model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageProvider } from './../../providers/language/language';

import { LanguageRepository } from './../../enteties/language';
import { Guest } from ".././../enteties/guest";
import { getRepository, Repository } from 'typeorm';
import { HomePage } from '../home/home';
import { StatusPage } from '../status/status';
import { GuesthomePage } from '../guesthome/guesthome';


@IonicPage()
@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html',
})
export class SelectLanguagePage {
   uz = "uz";
   ru = "ru"; 
  languages : Array <Language>;
  languageSelected : any = null ; 
  constructor(public navCtrl: NavController,
     public navParams : NavParams,
     private translate : TranslateService,
     private languageProvider : LanguageProvider ) {
      // this.languages = this.languageProvider.getSupportedLanguages();
     //  this.languageSelected = this.translate.getDefaultLang();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  }

 async goToNext(lang){
    let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
    const language = new LanguageRepository();
    language.code = lang;
    
    let guestrepo = getRepository('guest') as Repository <Guest>;
    let guest = new Guest();
    guest = await guestrepo.findOne({name : "God wills UNO will be beneficial for the development of SB TUIT!"});
    
    const isOld = await languagerepo.findOneById(1);
      if(isOld)
      {
        isOld.code = lang ;
        await languagerepo.save(isOld);

      }
      else {

        await languagerepo.save(language);
        

      }
    
      this.languageSelected = lang;

      if(this.languageSelected) {
          this.translate.setDefaultLang(this.languageSelected);
          this.translate.use(this.languageSelected);
      }
      if(!isOld)
        this.navCtrl.setRoot(StatusPage); //RegistrPage
      else 
      if(!guest)
        this.navCtrl.setRoot(HomePage);
      else
      this.navCtrl.setRoot(GuesthomePage);

      
      
  }

  goToRegistrPage() {
    this.navCtrl.push(RegistrPage);
  }

}
