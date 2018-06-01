import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-student-statistics',
  templateUrl: 'student-statistics.html',
})
export class StudentStatisticsPage {

  @ViewChild('barCanvas') barCanvas;
  debtor : string; 
  barChart: any;
  marks : string;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private screenOrientation: ScreenOrientation,
      public translateService : TranslateService) {
        this.translateService.get('debtor').subscribe( res =>{
            this.debtor = res;
        });
        
        this.translateService.get('markOfStudents').subscribe( res =>{
            this.marks = res;
        });
  }

  ionViewDidLoad() { 
    this.barChart = new Chart(this.barCanvas.nativeElement, {
    
               type: 'bar',
               data: {
                   labels: ["3", "4", "5"],
                   datasets: [{
                       label: this.marks,
                       data: [813, 352, 150],
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
  }

}
