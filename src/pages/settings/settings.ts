import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { DbProvider } from './../../providers/db/db';
import { ImageUtilProvider } from '../../providers/image-util/image-util';
import { UniversityImages } from './../../enteties/unversityimages';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
   news:any;
   photos : any;
   len : number;

  //  public uni = new UniversityImages();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public restProvider: RestApiProvider,
    public dbProvider: DbProvider,
    public imageUtil: ImageUtilProvider,
    public toastCtrl: ToastController,
    public authProvider: AuthProvider) {
      // this.photos = [];
      // this.restProvider.getData('newsbyid/5').then((res) => {
      //   this.news = res;
         
      //   console.log(this.photos);
      //   let p1 = this.imageUtil.uint8ArrayToB64(this.news[0].image.data);
      //   let p2 = this.imageUtil.b64ToBuffer(p1);
      //   this.uni.image = p2;
      //    this.dbProvider.insertImage(this.uni).then((res)=> {
      //     let toast = this.toastCtrl.create({
      //       message: 'Successfully inserted image!!!',
      //       duration: 2000,
      //       position: 'middle'
      //     });
      //     toast.present();
      //    })
      //    .catch((err) => {
      //     let toast = this.toastCtrl.create({
      //       message: 'Error!!!',
      //       duration: 2000,
      //       position: 'middle'
      //     });
      //     toast.present();
      //    })
      //  console.log(this.uni.image);
      // });
      
      this.dbProvider.getAll().then(res => {
        for(let i=0;i<res.length;i++) {
          let image =this.imageUtil.uint8ArrayToB64(res[i].image);
          this.photos.push(image);
        }
      });
      
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    
  }

  goToSelectLanguagePage(){
    this.navCtrl.setRoot('SelectLanguagePage');
  }

  goToHomePage(){
    if(AuthProvider.role!=3) 
    this.navCtrl.setRoot(HomePage);
  else
    this.navCtrl.setRoot('GuestHomePage');
  }
  
  getImages() {
    this.dbProvider.getImage().then((res) =>{
      if(res.image) {
        let toast = this.toastCtrl.create({
          message: 'Yes',
          duration: 2000,
          position: 'middle'
        });
        toast.present();
      }
      this.photos.push(this.imageUtil.uint8ArrayToB64(res.image));
    });
  }
}
