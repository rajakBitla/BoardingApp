import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.page.html',
  styleUrls: ['./filter-list.page.scss'],
})
export class FilterListPage implements OnInit {
allData:any
  constructor(
    private apiFactory: ApiFactoryService
  ) { }
  filterBusData() {
    this.apiFactory.FilterDataUrl().subscribe((res) => {
      this.allData=res
      console.log(res[0]);
      
      // console.log(res);

    })
  }
  ngOnInit() {
    this.filterBusData();
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  sleeper(){
    
  }
}