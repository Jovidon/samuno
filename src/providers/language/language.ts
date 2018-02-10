import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from "./../../model/language-model";

@Injectable()
export class LanguageProvider {

  supportedLanguages : Array<Language> = [];
  constructor(public http: HttpClient) {
    this.supportedLanguages.push(
      {name : "O'zbek",code : "uz"},
      {name : "Russian", code : "ru" });
  }

  getSupportedLanguages(){
    return this.supportedLanguages;
  }
}
