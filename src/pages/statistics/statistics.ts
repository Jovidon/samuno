import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ApplicantStatisticsPage } from '../applicant-statistics/applicant-statistics';
import { TeacherStatisticsPage } from '../teacher-statistics/teacher-statistics';
import { StudentStatisticsPage } from '../student-statistics/student-statistics';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  goToStudentStPage(){
    this.navCtrl.push(StudentStatisticsPage);
  }

  goToTeacherStPage(){
    this.navCtrl.push(TeacherStatisticsPage);
  }

  goToApplicantStPage(){
    this.navCtrl.push(ApplicantStatisticsPage);
  }
  
   ionViewDidLoad() {
    
           this.barChart = new Chart(this.barCanvas.nativeElement, {
    
               type: 'bar',
               data: {
                   labels: ["Qarzdor", "3 lik", "4 lik", "5 lik"],
                   datasets: [{
                       label: 'Talabalar',
                       data: [12, 19, 20, 3],
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(255, 159, 64, 0.2)'
                       ],
                       borderColor: [
                           'rgba(255,99,132,1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           'rgba(153, 102, 255, 1)',
                           'rgba(255, 159, 64, 1)'
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       yAxes: [{
                           ticks: {
                               beginAtZero:true
                           }
                       }]
                   }
               }
    
           });
    
           this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    
               type: 'doughnut',
               data: {
                   labels: ["Professor", "Fan nomzodi", "Katta o'qtuvchi", "Asistent"],
                   datasets: [{
                       label: "Professor-o'qtuvchilar",
                       data: [12, 19,  5, 2],
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(255, 159, 64, 0.2)'
                       ],
                       hoverBackgroundColor: [
                           "#FF6384",
                           "#36A2EB",
                           "#FFCE56",
                           "#FF6384",
                           "#36A2EB",
                           "#FFCE56"
                       ]
                   }]
               }
    
           });
    
           this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    
               type: 'line',
               data: {
                   labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                   datasets: [
                       {
                           label: "Abituriyentlar uchun",
                           fill: false,
                           lineTension: 0.1,
                           backgroundColor: "rgba(75,192,192,0.4)",
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
                           pointRadius: 1,
                           pointHitRadius: 10,
                           data: [170, 123, 134, 129, 110, 100, 143],
                           spanGaps: false,
                           
                       }
                   ]
               }
    
           });
    
       }

}
