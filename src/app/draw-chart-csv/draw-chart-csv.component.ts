import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from './data.service';

@Component({
  selector: 'app-draw-chart-csv',
  templateUrl: './draw-chart-csv.component.html',
  styleUrls: ['./draw-chart-csv.component.css']
})
export class DrawChartCsvComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  chart: any;

  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    this.dataService.getData().subscribe(data => {
      this.drawChart(data);
    });
  }

  drawChart(data: any[]) {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Datos desde CSV',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}



// import { Component, AfterViewInit } from '@angular/core';
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexTitleSubtitle,
//   ApexStroke,
//   ApexGrid
// } from "ng-apexcharts";
// import { HttpClient } from '@angular/common/http';


// export type ChartOptions = {
//   series: ApexAxisChartSeries | any;
//   chart: ApexChart | any;
//   xaxis: ApexXAxis | any;
//   dataLabels: ApexDataLabels | any;
//   grid: ApexGrid | any;
//   stroke: ApexStroke | any;
//   title: ApexTitleSubtitle | any;
// };

// @Component({
//   selector: 'app-draw-chart-csv',
//   templateUrl: './draw-chart-csv.component.html',
//   styleUrls: ['./draw-chart-csv.component.css']
// })

// export class DrawChartCsvComponent implements
//   AfterViewInit {
//     chart: any;
//     dataPoints: any = [];
//     showChart: Boolean = false;
  
//     constructor(private http: HttpClient) {}
  
//     chartOptions = {
//       animationEnabled: true,
//       theme: 'light1', //"light2", "dark1", "dark2"
//       title: {
//         text: 'Angular Chart with CSV Data',
//       },
//       axisX: {
//         reversed: true,
//       },
//       axisY: {
//         title: 'Marks Scored (Out of 100)',
//         includeZero: true,
//       },
//       data: [
//         {
//           dataPoints: this.dataPoints,
//         },
//       ],
//     };
//     getChartInstance(chart: object) {
//       this.chart = chart;
//     }
  
//     ngAfterViewInit() {
//       this.http
//         .get('../data/fc3noor2.csv', {
//           responseType: 'text',
//         })
//         .subscribe((response: any) => {
//           let csvRowData = response.split(/[\r?\n|\r|\n]+/);
//           csvRowData.forEach((rowData: any, index: number) => {
//             if (index === 0) return;
//             var data = rowData.split(',');
//             this.dataPoints.push({ label: data[0], y: parseInt(data[1]) });
//           });
//           this.showChart = true;
//         });
//     }
// }
