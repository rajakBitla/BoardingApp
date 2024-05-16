import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.page.html',
  styleUrls: ['./passengers.page.scss'],
})
export class PassengersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
