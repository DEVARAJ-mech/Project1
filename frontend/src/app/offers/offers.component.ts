import { Component } from '@angular/core';
import Highcharts, {Options} from 'highcharts';
import {HighchartsChartModule} from 'highcharts-angular';

@Component({
  selector: 'app-offers',
  imports: [
    HighchartsChartModule
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: '#f9f9fc',
      borderRadius: 8,
      shadow: true,
    },
    title: {
      text: 'Product Sales Statistics',
      style: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        color: '#673ab7',
      },
    },
    xAxis: {
      categories: ['Milk', 'Toothpaste', 'Biscuits', 'Dishwash'],
      labels: {
        style: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          color: '#333',
        },
      },
      lineColor: '#ccc',
    },
    yAxis: {
      title: {
        text: 'Quantity Sold',
        style: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px',
          color: '#333',
        },
      },
      gridLineColor: '#e0e0e0',
    },
    tooltip: {
      backgroundColor: '#673ab7',
      style: {
        color: '#fff',
        fontSize: '12px',
      },
    },
    series: [
      {
        name: 'Products',
        type: 'column',
        data: [120, 100, 80, 150],
        color: '#673ab7',
      },
    ],
    credits: {
      enabled: false,
    },
  };
}
