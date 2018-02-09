import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrPage } from './../registr/registr'
import { Language } from './../../model/language-model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageProvider } from './../../providers/language/language';



@IonicPage()
@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html',
})
export class SelectLanguagePage {

  languages : Array <Language>;
  languageSelected : any = null ; 
  constructor(public navCtrl: NavController,
     public navParams : NavParams,
     private translate : TranslateService,
     private languageProvider : LanguageProvider ) {
       this.languages = this.languageProvider.getSupportedLanguages();
       this.languageSelected = this.translate.getDefaultLang();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  }
  goToRegistrPage(){
    this.navCtrl.push(RegistrPage);
  }

  setLanguage(){
    if(this.languageSelected) {
        this.translate.setDefaultLang(this.languageSelected);
        this.translate.use(this.languageSelected);
    }

  }

}
