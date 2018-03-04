import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-teacher-statistics',
  templateUrl: 'teacher-statistics.html',
})
export class TeacherStatisticsPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  prof : string;
  dots : string;
  teach : string;
  assist : string;
  statis : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate : TranslateService) {
     
    this.translate.get('labelProfessors').subscribe(data => {
          this.prof = data;
      });
      this.translate.get('labelDots').subscribe(data =>{
          this.dots = data;
      });
      this.translate.get('labelTeachers').subscribe(data =>{
          this.teach = data;
      });
      this.translate.get('labelAssitent').subscribe(data =>{
          this.assist = data;
      });
      this.translate.get('labelProfessorSt').subscribe(data =>{
          this.statis = data;
      });
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      
                 type: 'doughnut',
                 data: {
                     labels: [this.prof,this.dots, this.teach, this.assist],
                     datasets: [{
                         label: this.statis,
                         data: [4, 17,  33, 63],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             
                         ],
                         hoverBackgroundColor: [
                             "#FF6384",
                             "#36A2EB",
                             "#FFCE56",
                             "#b7e6e6",
                            
                         ]
                     }]
                 }
      
             });

  }

}
