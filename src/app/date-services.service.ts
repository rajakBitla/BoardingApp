import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateServicesService {

  constructor() { }
  getToday(): Date {
    return new Date();
  }

  getTomorrow(): Date {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  }

  getYesterday(): Date {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }
}
