import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-testing',
  standalone: true,
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  imports: [BaseChartDirective],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TestingPage implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 10, 20, 30, 40, 50, 60, 70 ], label: 'Series A' },
      // { data: [ 10, 20, 30, 40, 50, 60, 70 ], label: 'Series A' }
      
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }, 
    }
  };
//==========================================================
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      { data: [350, 450, 100], label: 'Series A' },
      { data: [50, 150, 120], label: 'Series B' },
      { data: [250, 130, 70], label: 'Series C' },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };
//============================================================================
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
    
  };
  public lineChartLegend = false;
  constructor() { }

  ngOnInit() {
  }

}
