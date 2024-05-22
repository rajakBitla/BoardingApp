import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

import * as _ from 'lodash';
@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  @ViewChild('myDiv') mydv=ElementRef
  busRoutes: any;
  serviceData: any;
  origin: string = '';
  id: any;
  uniqueOrigins: any[] = [];
  filteredDestinations: any[] = [];
  isOriginSelection: boolean = true;

  constructor(private mdctrl: ModalController,public params: NavParams) {}

  ngOnInit() {
    this.serviceData = this.params.get('serviceData');
    this.isOriginSelection = this.params.get('isOriginSelection');
    this.busRoutes = this.serviceData;

    if (this.isOriginSelection) {
      this.getUniqueOrigins();
    } else {
      const originId = this.params.get('originId');
      this.getDestinationsForOrigin(originId);
    }
  }

  getUniqueOrigins() {
    const originsSet = new Set();
    this.uniqueOrigins = this.busRoutes.filter((route:any) => {
      if (!originsSet.has(route.origin.id)) {
        originsSet.add(route.origin.id);
        return true;
      }
      return false;
    }).map((route:any) => route.origin);
  }
  

  getDestinationsForOrigin(originId: any) {
    this.filteredDestinations = this.busRoutes
      .filter((route: any) => route.origin.id === originId)
      .map((route: any) => route.destination);
  }

  filterData(searchText: string ) {
    
    if (this.isOriginSelection) {
      this.uniqueOrigins = this.busRoutes
        .filter((route: any) => route.origin.name.toLowerCase().includes(searchText!.toLowerCase()))
        .map((route: any) => route.origin);
      const originsMap = new Map();
      this.uniqueOrigins.forEach((origin: any) => {
        if (!originsMap.has(origin.id)) {
          originsMap.set(origin.id, origin);
        }
      });
      this.uniqueOrigins = Array.from(originsMap.values());
    } else {
      const originId = this.params.get('originId');
      this.filteredDestinations = this.busRoutes
        .filter((route: any) => route.destination.name.toLowerCase().includes(searchText!.toLowerCase()) && route.origin.id === originId)
        .map((route: any) => route.destination);
    }
  }

  selectCity(city: any) {
    this.mdctrl.dismiss(city);
  }

  close() {
    this.mdctrl.dismiss();
  }
  }