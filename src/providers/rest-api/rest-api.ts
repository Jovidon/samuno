import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthProvider } from './../auth/auth';
@Injectable()
export class RestApiProvider {


  data : string ="salom";
  link : string="http://192.168.137.2:3333/";
  logic : boolean;
  serverdata : any;

  constructor(
    public http: HttpClient,
    private toast : ToastController,
    public authProvider: AuthProvider) {
  }

  getNotice(url){
    var head = new HttpHeaders({
      'Content-Type': "application/json",
      "Authorization" : "Bearer " + AuthProvider.token
    });
    return new Promise(resolve => {
      this.http.get(this.link + url + "/" + AuthProvider.role, {headers : head}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getData(url) {
    var head = new HttpHeaders({
      'Content-Type': "application/json",
      "Authorization" : "Bearer " + AuthProvider.token
    });
    return new Promise(resolve => {
      this.http.get( this.link + url, {headers: head} ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
