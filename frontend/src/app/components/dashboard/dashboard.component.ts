import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import {HighchartsChartModule} from 'highcharts-angular';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    HighchartsChartModule,
    RouterOutlet
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: { text: 'Sales Data' },
    series: [
      {
        type: 'line',
        data: [10, 15, 12, 8, 7],
        name: 'Sales'
      }
    ]
  };
}
