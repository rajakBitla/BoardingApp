import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';

@Component({
  selector: 'app-tsdashboard',
  templateUrl: './tsdashboard.page.html',
  styleUrls: ['./tsdashboard.page.scss'],
})
export class TsdashboardPage implements OnInit {
  allStats: any
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
