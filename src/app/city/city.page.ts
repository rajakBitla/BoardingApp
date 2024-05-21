import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiFactoryService } from '../api-factory.service';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as _ from 'lodash';
@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  busRoutes: any
  serviceData: any
  destinationPairs: any[] = [];
  filteredPairs: any[] = [];
  origin: string = '';
  destination: string = '';
  id: any
  uniqueOriginNamesArray: any
  Ocheck: boolean = true
  Dcheck: boolean = false
  constructor(private mdctrl: ModalController,
    private apiFactory: ApiFactoryService,
    public params: NavParams,
    private router: Router,
    private toastController: ToastController
  ) { }
  ngOnInit() {
    this.serviceData = this.params.get('serviceData');
    this.busRoutes = this.serviceData
    this.destinationPairs = this.serviceData

  }
  getUniqueData(text: any) {
    this.serviceData = this.busRoutes.filter((pair: any, ind: any) => {
      _.uniqBy(this.busRoutes, this.busRoutes[ind].origin.id)
    })
  }
  close() {
    this.mdctrl.dismiss()
    if (this.destination.trim().length == 0 && this.Ocheck) {
      for (let index = 0; index < this.busRoutes.length; index++) {
        if (this.busRoutes[index].origin.name.toLowerCase() === this.origin.toLowerCase()) {
          this.id = this.busRoutes[index].origin.id
          this.Ocheck = false
          console.log('origin passed');
          break
        }
      }
      this.router.navigate(['/searchbuses', { "org": this.origin, "originId": this.id }])
      console.log('origin passed 2');
    } else {
      this.router.navigate(['/searchbuses', { "des": this.destination }])
    }
  }

  filterData(data: any) {
    if (this.destination.trim().length === 0) {
      this.serviceData = this.apiFactory.filterByOrigin(this.busRoutes, data)
    } else {
      this.serviceData = this.apiFactory.filterByDestination(this.busRoutes, data, this.id)
    }
  }
}