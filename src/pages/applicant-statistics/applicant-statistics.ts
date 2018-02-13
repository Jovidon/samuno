import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      
                 type: 'line',
                 data: {
                     labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                     datasets: [
                        {
                            label: "Davlat grantlari",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(7, 99, 117,0.4)",
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
                            data: this.grandBall,
                            spanGaps: false,
                        },
                        {
                          label: "To'lov shartnoma",
                          fill: true,
                          lineTension: 0.1,
                          backgroundColor: "rgba(7, 120, 43,0.4)",
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
                          data: this.contractBall,
                          spanGaps: false,
                      }
                     ]
                 }
      
             });
  }

  makeBall(){
   if(this.direction == 1 && this.eduLang == 1) {
       this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
       this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
       
   }    
   if(this.direction == 1 && this.eduLang == 2) {
    this.grandBall = [187, 145 , 150 , 156, 133, 140 , 148 ];
    this.contractBall = [162 , 119 , 127, 129, 110 , 108, 125];
    
    }    
    if(this.direction == 2 && this.eduLang == 1) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }    
    if(this.direction == 2 && this.eduLang == 2) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }   
    if(this.direction == 3 && this.eduLang == 1) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }   
    if(this.direction == 3 && this.eduLang == 2) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }   
    if(this.direction == 4 && this.eduLang == 1) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }    
    if(this.direction == 4 && this.eduLang == 2) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }   
    if(this.direction == 5 && this.eduLang == 1) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }    
    if(this.direction == 5 && this.eduLang == 2) {
        this.grandBall = [200, 145 , 150 , 156, 133, 140 , 148 ];
        this.contractBall = [171 , 119 , 127, 129, 110 , 108, 125];
        
    }        
    this.ionViewDidLoad();
  }

}
