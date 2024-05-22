import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../api-factory.service';
import { ModalController, ToastController } from '@ionic/angular';
import { CityPage } from '../city/city.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbuses',
  templateUrl: './searchbuses.page.html',
  styleUrls: ['./searchbuses.page.scss'],
})
export class SearchbusesPage implements OnInit {
  allData: any;
  origin = 'origin text';
  destination = 'destination text';
  Origins: any[] = [];
  Destinations: any[] = [];
  id: any;
  date: any;
  dateValue: any;

  constructor(
    private apiFactory: ApiFactoryService,
    private mdCtrl: ModalController,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.apiFactory.getAllOriginsDestination().subscribe((res: any) => {
      this.allData = res.result;
    });
    this.route.paramMap.subscribe((params: any) => {
      this.origin = params.get('org');
      this.id = params.get('originId');
      this.destination = params.get('des');
    });
    this.setToday()
  }

  changeDate(ev: any) {
    const parts = ev.detail.value.split('T');
    this.date = parts[0];
    console.log(this.date + ' -> ' + 'date selected');
    console.log(this.destination + ' -> ' + 'destination selected');
    console.log(this.origin + ' -> ' + 'origin selected');
  }

  async moveOrg() {
    const modal = await this.mdCtrl.create({
      component: CityPage,
      componentProps: { "serviceData": this.allData, "isOriginSelection": true },
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.origin = data.data.name;
        this.id = data.data.id;
        this.destination = ''; // Clear destination when a new origin is selected
      }
    });

    await modal.present();
  }

  async moveDes() {
    const modal = await this.mdCtrl.create({
      component: CityPage,
      componentProps: { "serviceData": this.allData, "isOriginSelection": false, "originId": this.id },
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.destination = data.data.name;
      }
    });

    await modal.present();
  }

  swipe() {
    const temp = this.origin;
    this.origin = this.destination;
    this.destination = temp;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  Search() {
    if (this.origin === null && this.destination === null) {
      this.presentToast('Please enter both origin and destination');
    } 
    if (this.origin === null&& !this.destination === null) {
      this.presentToast('Please enter an origin');
    }
    if (this.destination === null && !this.origin===null) {
      this.presentToast('Please enter a destination');
    } else {
      console.log(this.date);
      console.log(this.origin);
      console.log(this.destination);
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  setToday() {
    const today = new Date();
    this.date = this.formatDate(today);
  }

  setTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.date = this.formatDate(tomorrow);
  }
}