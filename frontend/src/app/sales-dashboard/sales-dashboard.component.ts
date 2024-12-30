import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import {HighchartsChartModule} from 'highcharts-angular';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  imports: [
    HighchartsChartModule
  ],
  standalone: false,
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Sales Overview'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    },
    yAxis: {
      title: {
        text: 'Sales ($)'
      }
    },
    series: [
      {
        name: '2023 Sales',
        data: [4500, 5600, 7500, 8200, 6500, 7100, 8600],
        type: 'column'
      },
      {
        name: '2022 Sales',
        data: [4000, 5200, 6800, 7900, 6200, 6700, 8000],
        type: 'column'
      }
    ]
  };
}

