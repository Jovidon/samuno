import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from './../../providers/auth/auth';

@Injectable()
export class RegisterApiProvider {

  public link = "http://192.168.137.1:3333/";
  constructor(
    public http: HttpClient,
    public authProvider: AuthProvider) { }
  
  getRegister(url) {
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

  postRegister(param):Observable<any>{
    return this.http.post(this.link+"register/",param);
  }
}
