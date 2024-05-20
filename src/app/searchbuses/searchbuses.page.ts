import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';

@Component({
  selector: 'app-searchbuses',
  templateUrl: './searchbuses.page.html',
  styleUrls: ['./searchbuses.page.scss'],
})
export class SearchbusesPage implements OnInit {
allData:any
  constructor(private apiFactory:ApiFactoryService) { }

  ngOnInit() {
    this.apiFactory.getAllOriginsDestination().subscribe((res:any)=>{
this.allData=res.result;
// console.log(this.allData[0].origin.name);

    })
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
