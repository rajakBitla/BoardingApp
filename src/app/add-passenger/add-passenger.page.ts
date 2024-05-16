import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.page.html',
  styleUrls: ['./add-passenger.page.scss'],
})
export class AddPassengerPage implements OnInit {

  constructor(private toastController: ToastController) { }
  async presentToast(position: 'top' ) {
    const toast = await this.toastController.create({
      message: 'Added passenger',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }


  ngOnInit() {
  }

}
