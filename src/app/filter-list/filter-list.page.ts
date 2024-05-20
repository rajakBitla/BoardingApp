import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.page.html',
  styleUrls: ['./filter-list.page.scss'],
})
export class FilterListPage implements OnInit {
allData:any
tempData:any
  constructor(
    private apiFactory: ApiFactoryService
  ) { }
  filterBusData() {
    this.apiFactory.FilterDataUrl().subscribe((res) => {
      this.allData=res
      this.tempData=res
      console.log(res[0]);
    })
  }
  ngOnInit() {
    this.filterBusData();
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  filter(test:any){
    this.tempData=[]
    this.allData.forEach((element:any) => {
      if(element.bus_type.indexOf(test)>=0){
        this.tempData.push(element);
      }
      
    });
    
  }
}