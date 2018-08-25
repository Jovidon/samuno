import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Language } from './../../model/language-model';
import { TranslateService } from '@ngx-translate/core';

import { LanguageRepository } from './../../enteties/language';
import { getRepository, Repository } from 'typeorm';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';

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
  constructor(
    public navCtrl: NavController,
    public navParams : NavParams,
    private translate : TranslateService,
    public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  }

 async goToNext(lang){
   //  Any work with db should be done with provider
    let languagerepo = getRepository('languagerepository') as Repository <LanguageRepository>;
    const language = new LanguageRepository();
    language.code = lang;
    
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

      if(!isOld){
        this.navCtrl.setRoot('StatusPage');
      }
      else
      {
        if(AuthProvider.role == 3)
        this.navCtrl.setRoot('GuesthomePage');
        else
        this.navCtrl.setRoot(HomePage);
      }  
  }

}
