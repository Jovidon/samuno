import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-modal-statistics',
  templateUrl: 'modal-statistics.html',
})
export class ModalStatisticsPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  grandBall : number [];
  contractBall : number [];
  grandText  : string ;
  contractText : string;
  direction : string ;
  lang : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view : ViewController,public translate: TranslateService) {
    this.translate.get('labelGrand').subscribe(data => {
      this.grandText = data;
  });
  this.translate.get('labelContract').subscribe(data => {
      this.contractText = data;
  });
    
  }
  ionViewWillLoad(){
    this.grandBall = this.navParams.get('data1');
    this.contractBall = this.navParams.get('data2');
  }

  ionViewDidLoad() {
   
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      
                 type: 'line',
                 data: {
                     labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
                     datasets: [
                        {
                            label: this.grandText,
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
                          label: this.contractText,
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
  closeModal()
  {
    this.view.dismiss(0);
    
  }
}
