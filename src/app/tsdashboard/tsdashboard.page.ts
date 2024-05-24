import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';
import { DateServicesService } from '../date-services.service';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-tsdashboard',
  templateUrl: './tsdashboard.page.html',
  styleUrls: ['./tsdashboard.page.scss'],
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TsdashboardPage implements OnInit {
  selectedSegment: string = 'business';
  yesterday: any = this.formatDate(this.dateService.getYesterday())
  today: any = new Date()
  tomorrow: any = this.formatDate(this.dateService.getTomorrow())

  allStats: any = [
    {
        "label": "occupancy",
        "total_occupancy": 6.84,
        "last_updated": "24/05/2024 04:39 PM",
        "yesterday": "2.72",
        "today": "6.84",
        "tomorrow": "3.5",
        "is_pinned": "0",
        "order": "1"
    },
    {
        "label": "performance",
        "branch": "70.57",
        "agent": "21.95",
        "api": "5.7",
        "e-ticket": "1.79",
        "e_ticket": "1.79",
        "total_performance": "100.01",
        "is_pinned": "0",
        "order": "2"
    },
    {
        "label": "revenue",
        "total_revenue": 425673.59,
        "last_updated": "24/05/2024 04:39 PM",
        "yesterday": 190530.52,
        "today": 425673.59,
        "tomorrow": 255728.61,
        "is_pinned": "0",
        "order": "3"
    },
    {
        "label": "schedules_summary_active_cancelled",
        "yesterday": "116/1",
        "last_updated": "24/05/2024 04:39 PM",
        "today": "62/1",
        "tomorrow": "64/3",
        "is_pinned": "0",
        "order": "4"
    },
    {
        "label": "time_blocked_seats_booked_released",
        "yesterday": "13/4",
        "last_updated": "24/05/2024 04:39 PM",
        "today": "4/5",
        "tomorrow": "7/6",
        "is_pinned": "0",
        "order": "5"
    },
    {
        "label": "total_pending_quota_seats",
        "yesterday": 248,
        "last_updated": "24/05/2024 04:39 PM",
        "today": 130,
        "tomorrow": 120,
        "is_pinned": "0",
        "order": "6"
    }
]
  occupancy: any
  performance: any
  revenue: any
  active_cancelled: any
  booked_released: any
  quota_seats: any

  // ====================== net revenue chart data
  title = 'ng2-charts-demo';

  public revChartLegend = false;
  public revChartPlugins = [ChartDataLabels];

  public revenueChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [this.yesterday, this.today, this.tomorrow],
    datasets: [
      { data: [], },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ],  }
    ]
  };

  public revenueChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          color: 'transparent' 
        },
        ticks: {
          display: true // Hide x-axis ticks (optional)
        }
      },
      y: {
        grid: {
          display: false,
          color: 'transparent' 
        },
        ticks: {
          display: false // Hide y-axis ticks (optional)
        }
      }
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value: any) => {
          console.log();
          
          return value.toLocaleString().split(",")[0]+"k";
        }
      }
    }
  };
  private RevnueChartData() {
    this.revenueChartData = {
      labels: [this.yesterday, this.today, this.tomorrow],
      datasets: [
        {
          data: [this.revenue.yesterday, this.revenue.today, this.revenue.tomorrow],
          backgroundColor: [
            'rgba(255, 0, 100, 1)', 
            'rgba(255, 215, 0, 1)', 
            'rgba(0, 128, 0, 1)'  
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 206, 86, 1)'  
          ],
          borderWidth: 0,
          barThickness: 20
        }
      ]
    };
  }
  // ==============================================



   // ====================== Booking trends chart data
   public BookingChartLegend = false;
   public BookingChartPlugins = [ChartDataLabels];
 
   public BookingChartData: ChartConfiguration<'bar'>['data'] = {
     labels: [this.yesterday, this.today, this.tomorrow],
     datasets: [
       { data: [], },
       // { data: [ 28, 48, 40, 19, 86, 27, 90 ],  }
     ]
   };
 
   public BookingChartOptions: ChartConfiguration<'bar'>['options'] = {
     responsive: true,
     maintainAspectRatio: false,
     scales: {
       x: {
         grid: {
           display: false,
           color: 'transparent' ,
         },
         ticks: {
           display: true, // Hide x-axis ticks (optional)
          //  padding:10
         }
       },
       y: {
         grid: {
           display: false,
           color: 'transparent' 
         },
         ticks: {
           display: true ,// Hide y-axis ticks (optional)
           padding: 10,
           color: 'transparent'
         }
       }
     },
     plugins: {
       datalabels: {
         anchor: 'end',
         align: 'end',
         formatter: (value: any) => {
           console.log();
           
           return value.toLocaleString().split(",")[0]+"k";
         }
       }
     }
   };
   private BookingChart() {
     this.BookingChartData = {
       labels: ['Branch','Api','Agent','E-Bkg'],
       datasets: [
         {
           data: [this.performance.branch, this.performance.api, this.performance.agent,this.performance.e_ticket],
           backgroundColor: [
             'rgba(255, 0, 100, 1)', 
             'rgba(255, 215, 0, 1)', 
             'rgba(0, 128, 0, 1)'  
           ],
           borderColor: [
             'rgba(75, 192, 192, 1)', 
             'rgba(54, 162, 235, 1)', 
             'rgba(255, 206, 86, 1)'  
           ],
           borderWidth: 0,
           barThickness: 20
         }
       ]
     };
   }
   // ==============================================



   // ==============================================   Occuracy chart data
   public OccuChartLegend = false;
   public OccuChartPlugins = [ChartDataLabels];
 
   public OccuChartData: ChartConfiguration<'bar'>['data'] = {
     labels: [this.yesterday, this.today, this.tomorrow],
     datasets: [
       { data: [], },
       // { data: [ 28, 48, 40, 19, 86, 27, 90 ],  }
     ]
   };
 
   public OccuChartOptions: ChartConfiguration<'bar'>['options'] = {
     responsive: true,
     scales: {
       x: {
         grid: {
           display: false,
           color: 'transparent' 
         },
         ticks: {
           display: true // Hide x-axis ticks (optional)
         }
       },
       y: {
         grid: {
           display: false,
           color: 'transparent' 
         },
         ticks: {
           display: true, // Hide y-axis ticks (optional)
           color: 'transparent'
         }
       }
     },
     plugins: {
       datalabels: {
         anchor: 'end',
         align: 'end',
         formatter: (value: any) => {
           console.log();
           
           return value.toLocaleString()+'%';
         }
       }
     }
   };
   private OccuChart() {
     this.OccuChartData = {
       labels: [this.yesterday, this.today, this.tomorrow],
       datasets: [
         {
           data: [this.occupancy.yesterday, this.occupancy.today, this.occupancy.tomorrow],
           backgroundColor: [
             'rgba(255, 0, 100, 1)', 
             'rgba(255, 215, 0, 1)', 
             'rgba(0, 128, 0, 1)'  
           ],
           borderColor: [
             'rgba(75, 192, 192, 1)', 
             'rgba(54, 162, 235, 1)', 
             'rgba(255, 206, 86, 1)'  
           ],
           borderWidth: 0,
           barThickness: 20
         }
       ]
     };
   }
   // ==============================================
   // ==============================================     Today summary chart
   public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    maintainAspectRatio: false
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = false;
  public pieChartPlugins = [];
   // ==============================================
  constructor(
    private apiFactory: ApiFactoryService,
    private dateService: DateServicesService
  ) { }

  ngOnInit() {
    this.apiFactory.getStatistics().subscribe((res: any) => {
      // this.allStats=res.result
      // console.log(res.result);
      
      console.log(this.allStats);
      this.occupancy = this.allStats[0]
      this.performance = this.allStats[1]
      this.revenue = this.allStats[2]
      this.active_cancelled = this.allStats[3]
      this.booked_released = this.allStats[4]
      this.quota_seats = this.allStats[5]
      this.today = this.formatDate(this.dateService.getToday())
      this.tomorrow = this.formatDate(this.dateService.getTomorrow())
      this.yesterday = this.formatDate(this.dateService.getYesterday())
      this.RevnueChartData()
      this.BookingChart()
      this.OccuChart()
    })
  }
  ChangeContent(segmentValue: any) {
    this.selectedSegment = segmentValue;
  }
  private formatDate(date: Date): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} ${monthName}`;
  }
}