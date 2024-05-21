import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';

@Component({
  selector: 'app-searchbuses',
  templateUrl: './searchbuses.page.html',
  styleUrls: ['./searchbuses.page.scss'],
})
export class SearchbusesPage implements OnInit {
  allData: any;
  destinationPairs: any[] = [];
  filteredPairs: any[] = [];
  origin: string = '';
  destination: string = '';
  selectedDate: string = '';
  constructor(private apiFactory: ApiFactoryService) {}

  ngOnInit() {
    this.apiFactory.getAllOriginsDestination().subscribe((res: any) => {
      this.allData = res.result;
      this.destinationPairs = res.result;
      this.filteredPairs = res.result;
      // console.log(this.allData[0].origin.name);
    });
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  filterData() {
    this.filteredPairs = this.destinationPairs.filter((pair) => {
      const matchesOrigin =
        !this.origin ||
        pair.origin.name.toLowerCase().includes(this.origin.toLowerCase());
      const matchesDestination =
        !this.destination ||
        pair.destination.name
          .toLowerCase()
          .includes(this.destination.toLowerCase());
      const matchesDate =
        !this.selectedDate ||
        new Date(pair.date).toLocaleDateString('en-US') ===
          new Date(this.selectedDate).toLocaleDateString('en-US');
      return matchesOrigin && matchesDestination && matchesDate;
    });
  }
}
