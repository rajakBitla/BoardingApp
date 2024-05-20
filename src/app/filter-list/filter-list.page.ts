import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular'
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.page.html',
  styleUrls: ['./filter-list.page.scss'],
})
export class FilterListPage implements OnInit {
  allData: any
  tempData: any
  items: any;
  selectedTags :any;
  selectedOptions: string[] = [];
  noBus = false
 
  constructor(
    private apiFactory: ApiFactoryService
  ) { }
  filterBusData() {
    this.apiFactory.FilterDataUrl().subscribe((res) => {
      this.allData = res
      this.tempData = res
      // console.log(res[0]);
    })
  }

  ngOnInit() {
    // this.filterBusData();
    this.apiFactory.FilterDataUrl().subscribe((res) => {
      this.allData = res
      this.tempData = res
      // console.log(res[0]);
    })
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  filter(test: any) {
    this.tempData = this.allData.filter((element: any) => element.bus_type.indexOf(test) >= 0);
  
    if (this.tempData.length == 0) {
      this.noBus = true
    } else {
      this.noBus = false
    }

  }

  

  changeOption(event: CustomEvent) {
    this.selectedOptions = event.detail.value;
    const filterOPtions: any[] = [];

    for (const data of this.allData) {
      let allOptionsIncluded = true;
      for (const option of this.selectedOptions) {
        if (!data.bus_type.includes(option)) {
          allOptionsIncluded = false;
          break;
        }
      }
      if (allOptionsIncluded) {
        filterOPtions.push(data);
      }
    }

    this.tempData = filterOPtions;
    if (this.tempData.length == 0) {
      this.noBus = true
    } else {
      this.noBus = false
    }
  }
}