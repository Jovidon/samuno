import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import { ModalStatisticsPage } from './../modal-statistics/modal-statistics';
import { Modal } from 'ionic-angular/components/modal/modal';

@IonicPage()
@Component({
  selector: 'page-applicant-statistics',
  templateUrl: 'applicant-statistics.html',
})
export class ApplicantStatisticsPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  grandBall : number [];
  contractBall : number [];
  direction : number;
  eduLang : number;
  compEn : string;
  proEn :string;
  telecom : string;
  ocEdu : string;
  cyberSe : string;
  key : boolean = false;
  grandText  : string ;
  contractText : string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public translate: TranslateService,
              public modal : ModalController) {
                this.translate.get('labelGrand').subscribe(data => {
                    this.grandText = data;
                });
                this.translate.get('labelContract').subscribe(data => {
                    this.contractText = data;
                });

  } 

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        
                   type: 'line',
                   data: {
                       labels: ["2010","2011","2012", "2013", "2014", "2015", "2016", "2017"],
                       datasets: [
                          {
                              label: 'data2',
                              fill: true,
                              lineTension: 0.1,
                              backgroundColor: "rgba(255, 255, 255,0.4)",
                              borderColor: "rgba(75,192,192,1)",
                              borderCapStyle: 'butt',
                              borderDash: [],
                              borderDashOffset: 0.0,
                              borderJoinStyle: 'miter',
                              pointBorderColor: "rgba(75,192,192,1)",
                              pointBackgroundColor: "#fff",
                              pointBorderWidth: 1,
                              pointHoverRadius: 5,
                              pointHoverBackgroundColor: "rgba(75,192,192,1)",
                              pointHoverBorderColor: "rgba(220,220,220,1)",
                              pointHoverBorderWidth: 2,
                              pointRadius: 5,
                              pointHitRadius: 10,
                              data: [0 , 150 , 195.1,	100,	16.9,	125.6,	95.3,	140.9],
                              spanGaps: false,
                          },
                          {
                            label: 'data2',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255, 255, 255,0.4)",
                            borderColor: "rgba(75,192,100,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,100,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,100,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 5,
                            pointHitRadius: 10,
                            data: [200,100, 170.1,	130.41,	128.2,	100.6,	70.5, 140.5],
                            spanGaps: false,
                        },
                        {
                            label: 'data3',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255, 255, 255,0.4)",
                            borderColor: "rgba(120,30,25,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(120,30,25,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(120,30,25,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 5,
                            pointHitRadius: 10,
                            data: [75, 187 ,100,	145,	100.2,	143.9,	111.9,	111.6 ],
                            spanGaps: false,
                        }
                       ]
                   }
        
               });
               

  }
  newChart(a : number[],b : number[]) {
   
            
  }


  makeBall(){
      this.grandBall = [];
      this.contractBall = [];
    if(this.direction == 1 && this.eduLang == 1) {
        this.grandBall = [195.1,	162.56,	151.9,	157.6,	133.3,	140.9];
        this.contractBall = [170.1,	130.41,	128.2,	128.6,	109.5, 109.5];
    
    }
    else    
    if(this.direction == 1 && this.eduLang == 2) {
     this.grandBall = [134.8,	160.77,	152.3,	137.9,	130.5,	122.9 ];
     this.contractBall = [91.4,	128.80,	126.9,	107.5,	109.8,	97.0];
     
     } 
     else   
     if(this.direction == 2 && this.eduLang == 1) {
         this.grandBall = [0.0,	0.0,	130.1,	131.8,	135.4,	126.1 ];
         this.contractBall = [0.0,	0.0,	97.7,	107.3, 123.1,	103.3];
         
     }  
     else  
     if(this.direction == 2 && this.eduLang == 2) {
         this.grandBall = [0.0,	0.0,	126.2,	143.9,	111.9,	111.6 ];
         this.contractBall = [0.0,	0.0,	76.2,	110.3,	93.7,	78.3];
         
     }   
     else
     if(this.direction == 3 && this.eduLang == 1) {
         this.grandBall = [186.2,	167.15,	147.0,	147.5,	137.8,	123.4];
         this.contractBall = [158.7,	125.50,	118.1,	124.3,	109.5,	87.5];
         
     }   
     else
     if(this.direction == 3 && this.eduLang == 2) {
         this.grandBall = [143.9,	158.24,	132.8,	139.9,	120.5,	119.5 ];
         this.contractBall = [109.6,	137.45,	109.3,	109.0,	107.5,	79.2];
         
     } 
     else  
     if(this.direction == 4 && this.eduLang == 1) {
         this.grandBall = [196.2,	138.83,	126.3,	132.6,	123.2,	126.3];
         this.contractBall = [172.3,	101.00,	106.7,	122.2,	105.4,	88.2];
         
     }   
     else 
     if(this.direction == 4 && this.eduLang == 2) {
         this.grandBall = [124.2,	127.05,	111.0,	100.1,	128.9,	89.2];
         this.contractBall = [96.0,	108.53,	81.4,	94.1,	106.7,	73.2];
         
     }   
     else
     if(this.direction == 5 && this.eduLang == 1) {
         this.grandBall = [0.0,	0.0,	0.0,	0.0,	152.9,	136.6 ];
         this.contractBall = [0.0,	0.0,	0.0,	0.0,	142.8,	92.7];
         
     }   
     else 
     if(this.direction == 5 && this.eduLang == 2) {
         this.grandBall = [0.0,	0.0,	0.0	, 0.0,	131.6,	140.3];
         this.contractBall = [0.0,	0.0,	0.0,	0.0,	95.4,	98.7];
         
     }        
     
    // this.ionViewWillEnter();
     if(this.direction && this.eduLang){
   
        
        
        const myModal : Modal = this.modal.create(ModalStatisticsPage, {data1 :this.grandBall, data2 :this.contractBall});
        myModal.present();
        myModal.onDidDismiss((data) =>{
            this.direction = 0;
            this.eduLang = 0;
        });
   }
  
}

}
