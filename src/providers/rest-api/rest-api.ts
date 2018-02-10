import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TimeTable } from './../../enteties/time-table';
import { getRepository, Repository } from 'typeorm';


@Injectable()
export class RestApiProvider {


  data : string ="salom";
  link : string;
  logic : boolean;
  serverdata : any;

  constructor(public http: HttpClient,  private toast : ToastController) {
    console.log('Hello RestApiProvider Provider');
  }

  apiUrl = 'http://192.168.137.1:80/json.php';
  url = 'http://jsonplaceholder.typicode.com/posts';
  local = '../../assets/res.json';
  neww = 'http://baxatest.000webhostapp.com';
  getUsers() {
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/api.php').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getTimeTable(){
    return new Promise(resolve => {
      this.http.get('http://192.168.137.1/api.php').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }
 
 async submit(facultyuser, courseuser, groupuser) {
   
    var myData = JSON.stringify({faculty : facultyuser, group : groupuser, course : courseuser});

    this.http.post('http://192.168.137.1/api.php', myData).subscribe( (data) =>{
      if(data){
          console.log(data);
         this.serverdata = data;

      }
      
   // this.navCtrl.push(this.serverdata);  
  });

  let timetablerepo = getRepository('timetable') as Repository <TimeTable>;
  const time = new TimeTable();
  time.day = this.serverdata.day;
  time.fan = this.serverdata.fan;
  time.teacher = this.serverdata.teacher;
  time.room = this.serverdata.room;
  time.type = this.serverdata.type;
  time.pair = this.serverdata.pair;
  await timetablerepo.save(time);

    let toast = this.toast.create({
      message : "Jo'natildi!",
      duration : 3000,
      position : 'middle'
    });
    toast.present();
   // this.getTimeTable();
    


  }

}
