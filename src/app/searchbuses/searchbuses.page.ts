import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';
import { ModalController } from '@ionic/angular';
import { CityPage } from '../city/city.page';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-searchbuses',
  templateUrl: './searchbuses.page.html',
  styleUrls: ['./searchbuses.page.scss'],
})
export class SearchbusesPage implements OnInit {
  allData: any;
  origin='origin text'
  destination="destination text"
  Origins:any[]=[]
  Destinations:any[]=[]
  id:any
  date:any
  constructor(private apiFactory: ApiFactoryService,
    private mdCtrl: ModalController,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.apiFactory.getAllOriginsDestination().subscribe((res: any) => {
      this.allData = res.result;
      // console.log(this.allData[0].origin.name);
    });
    this.route.paramMap.subscribe((params:any)=>{
      this.origin=params.get('org')
      this.id=params.get('originId')
      this.destination=params.get('des')
    })
  }
  changeDate(ev:any){
    const parts = ev.detail.value.split('T');
    this.date=parts[0]
    console.log(this.date+" -> "+ 'date selceted');
    console.log(this.destination+" -> "+ 'destination selceted');
    console.log(this.origin+" -> "+ 'origin selceted');
  }
  async moveOrg() {
    const modal = await this.mdCtrl.create({
      component: CityPage,
      componentProps: { "name": "service name", "serviceData": this.allData },
    })
    await modal.present()
  }

  async moveDes() {
    const modal = await this.mdCtrl.create({
      component: CityPage,
      componentProps: { "originid": "service name", "serviceData": this.allData,"originId":this.id },
    })
    await modal.present()
  }
  swipe(){
    const temp=this.origin
    this.origin=this.destination
    this.destination=temp
  }
}
