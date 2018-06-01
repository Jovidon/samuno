import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';
import { HomePage } from './../home/home';
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-header-staff',
  templateUrl: 'header-staff.html',
})
export class HeaderStaffPage {
  
  key : boolean = false;
  headerstaff = [];
  lang : string;

  staff : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public translate : TranslateService) {
     this.lang = this.translate.getDefaultLang();
      
    
    if(this.lang == 'uz') {

      this.headerstaff = [
        {
          "fullName": "Teshabayev To'lqin",
          "fatherName": "Zakirovich",
          "photo":  "assets/imgs/teshaboyev_t.jpg",
          "bio" : "",
          "lavozim" : "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti rektori",
          "ilmiyUnvon" : "Iqtisodiyot fanlari doktori",
          "tel" : " (+99871) 238-64-20" 
      },
      {
          "fullName": "Xaldjigitov Abduvali",
          "fatherName": "Abdisamatovich",
          "photo":  "assets/imgs/xoljigitov_a.jpg",
          "bio" : "21.03.1959  Toshkent vil. Piskent tumani",
          "lavozim" : "Muxxamad al-Xorazmiy nomidagi TATU SF direktori",
          "ilmiyUnvon" : "Professor",
          "tel" : "(0-366) 232-29-29" 
      },
       {
          "fullName": "Bekmurodov Qosim",
          "fatherName": "Allaberdiyevich",
          "photo":  "assets/imgs/bekmurodov_q.jpg",
          "bio" : "20.11.1958  Jizzax vil. Baxmal tumani",
          "lavozim" : "Muxxamad al-Xorazmiy nomidagi TATU SF o'quv va ilmiy ishlar bo'yicha direktor o`rinbosari ",
          "ilmiyUnvon" : "Fan nomzodi",
          "tel" : "(0-366) 232-00-76 " 
      },
       {
          "fullName": "Eshonqulov Shaxzod",
          "fatherName": "Eshquvatovich",
          "photo":  "assets/imgs/eshonqulov_sh.jpg",
          "bio" : "08.10.1978  Samarqand vil. Samarqand shahar",
          "lavozim" : "Muxxamad al-Xorazmiy nomidagi TATU SF ma'naviyat va ma'rifat ishlar bo'yicha direktor o`rinbosari ",
          "ilmiyUnvon" : "",
          "tel" : "(+99891) 529-33-02" 
      },
       {
          "fullName": "Tugalov Xotam",
          "fatherName": "Igamberdiyevich",
          "photo":  "assets/imgs/tugalov_x.jpg",
          "bio" : "16.12.1975  Jizzax vil. G'allorol tumani",
          "lavozim" : "Muxxamad al-Xorazmiy nomidagi TATU SF moliya va iqtisod ishlar bo'yicha direktor o`rinbosari ",
          "ilmiyUnvon" : "",
          "tel" : "" 
      }
      ];
    }
    else {
      this.headerstaff = [
        {
            "fullName": "Тешабаев Тулкин",
            "fatherName": "Закирович",
            "photo":  "assets/imgs/teshaboyev_t.jpg",
            "bio" : "",
            "lavozim" : "Ректор СФ ТУИТ по именим Мухаммад ал-Хоразмий",
            "ilmiyUnvon" : "Доктор наука",
            "tel" : "(+99871) 238-64-20" 
        },
        {
             "fullName": "Халджигитов Абдували",
             "fatherName": "Абдисамадович",
            "photo":  "assets/imgs/xoljigitov_a.jpg",
            "bio" : "21.03.1959  обл. Тaшкент рай. Пискент ",
            "lavozim" : "Директор СФ ТУИТ по именим Мухаммад ал-Хоразмий ",
            "ilmiyUnvon" : "Профессор",
            "tel" : "(0-366) 232-29-29" 
        },
         {
            "fullName": "Бекмуратов Қосим",
            "fatherName": "Аллабердиевич",
            "photo":  "assets/imgs/bekmurodov_q.jpg",
            "bio" : "20.11.1958  обл. Жиззах рай. Бахмал ",
            "lavozim" : "Заместитель директора по  СФ ТУИТ по именим Мухаммад ал-Хоразмий",
            "ilmiyUnvon" : "Доцент",
            "tel" : "(0-366) 232-00-76 " 
        },
         {
            "fullName": "Эшонқулов Шахзод",
            "fatherName": "Эшқуватович",
            "photo":  "assets/imgs/eshonqulov_sh.jpg",
            "bio" : "08.10.1978  обл. Самарканд г.Самарканд ",
            "lavozim" : "Заместитель директора по духовной и просветительской работе СФ ТУИТ по именим Мухаммад ал-Хоразмий",
            "ilmiyUnvon" : "",
            "tel" : "(+99891) 529-33-02" 
        },
         {
            "fullName": "Тугалов Хотам",
            "fatherName": "Игамбердиевич",
            "photo":  "assets/imgs/tugalov_x.jpg",
            "bio" : "16.12.1975  обл. Жиззах рай. Галлорол",
            "lavozim" : "Заместитель директора по финансовой и экономической работе СФ ТУИТ по именим Мухаммад ал-Хоразмий",
            "ilmiyUnvon" : "",
            "tel" : "" 
        }
    ];



    }
    
    this.key = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderStaffPage');
    //this.delay(30000);
    //this.key = true;
  }
  
 

  goToItem(p, classes: string = ""){
   let a =   this.modalCtrl.create('HeaderStaffModolPage', {p}, {
    cssClass: classes,
  });
   a.present();

  }
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }



}
