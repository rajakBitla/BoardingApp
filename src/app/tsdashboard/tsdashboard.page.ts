import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';

@Component({
  selector: 'app-tsdashboard',
  templateUrl: './tsdashboard.page.html',
  styleUrls: ['./tsdashboard.page.scss'],
})
export class TsdashboardPage implements OnInit {
  allStats=[
    {
        "label": "occupancy",
        "total_occupancy": 7.12,
        "last_updated": "23/05/2024 06:10 PM",
        "yesterday": "2.79",
        "today": "7.12",
        "tomorrow": "2.15",
        "is_pinned": "0",
        "order": "1"
    },
    {
        "label": "performance",
        "branch": "71.88",
        "agent": "20.19",
        "api": "6.03",
        "e-ticket": "1.9",
        "e_ticket": "1.9",
        "total_performance": "100.0",
        "is_pinned": "0",
        "order": "2"
    },
    {
        "label": "revenue",
        "total_revenue": 378851.09,
        "last_updated": "23/05/2024 06:10 PM",
        "yesterday": 193770.52,
        "today": 378851.09,
        "tomorrow": 61597.86,
        "is_pinned": "0",
        "order": "3"
    },
    {
        "label": "schedules_summary_active_cancelled",
        "yesterday": "116/1",
        "last_updated": "23/05/2024 06:10 PM",
        "today": "60/1",
        "tomorrow": "61/1",
        "is_pinned": "0",
        "order": "4"
    },
    {
        "label": "time_blocked_seats_booked_released",
        "yesterday": "13/4",
        "last_updated": "23/05/2024 06:10 PM",
        "today": "4/5",
        "tomorrow": "9/4",
        "is_pinned": "0",
        "order": "5"
    },
    {
        "label": "total_pending_quota_seats",
        "yesterday": 248,
        "last_updated": "23/05/2024 06:10 PM",
        "today": 102,
        "tomorrow": 101,
        "is_pinned": "0",
        "order": "6"
    }
]
  selectedSegment: string = 'business';  // Default to 'business'
  constructor(
    private apiFactory: ApiFactoryService
  ) { }

  ngOnInit() {
    this.apiFactory.getStatistics().subscribe((res: any) => {
      // this.allStats = res.result;
      console.log(res.result);
      
    })
    console.log(this.allStats);
    
  }


  ChangeContent(segmentValue: any) {
    this.selectedSegment = segmentValue;
  }
}
