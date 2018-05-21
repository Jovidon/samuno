import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TimeTable } from './../../enteties/time-table';
import { getRepository, Repository } from 'typeorm';
import { parse } from 'url';



@Injectable()
export class RestApiProvider {


  data : string ="salom";
  link : string;
  logic : boolean;
  serverdata : any;

  constructor(public http: HttpClient,  private toast : ToastController) {
    console.log('Hello RestApiProvider Provider');
  }

  apiUrl = 'http://192.168.137.1/';
  url = 'http://jsonplaceholder.typicode.com/posts';
  local = '../../assets/res.json';
  neww = 'http://baxatest.000webhostapp.com';
  
  getUsers(url) {
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/' + url + ".php").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getTeacher(url) {
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/pages/teachers/' + url + ".php").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

   parseJson(data: any): Promise<any> {
    return JSON.parse(data)
  }
  group(url) {
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/pages/groups/' + url + ".php").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getGroup(idFaculty){
   
    var myData = JSON.stringify({ faculty : idFaculty});
    this.http.post('http://192.168.137.1/api/groups.php', myData).subscribe( (data) =>{
  });

  }

  postTeacher(idCafedra,lang){
    let infoteacher = idCafedra+lang;
    var myData = JSON.stringify({ cafedra : infoteacher});
    this.http.post('http://192.168.137.1/api/teachers.php', myData).subscribe( (data) =>{
  });
  }
  
  registrPostTeacher(Teacher){
    let a = Teacher;
    var myData = JSON.stringify({ idTeacher : a});
    this.http.post('http://192.168.137.1/api/teach_api.php', myData).subscribe( (data) =>{
  });
  }
 
 /*async*/ 
    submit(name, surname, facultyuser, courseuser, groupuser) {
    
  
    let info = name + "@" + surname + "@" + facultyuser + "@" + courseuser + "@" + groupuser + "@4";
    var myData = JSON.stringify({ username : info});
    
    this.http.post('http://192.168.137.1/api/api.php', myData).subscribe( (data) =>{
  });

  }


}
