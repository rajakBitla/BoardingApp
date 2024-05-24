import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiFactoryService {
  constructor(private http: HttpClient) { }
  //for sample testing of api
  sampleUrl(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
  // for bus searching result displayed on on fares and fltering
  FilterDataUrl(): Observable<any> {
    return this.http.get(
      'https://www.morningstartravels.in/api/available_routes/2/3/2024-05-25.json?show_only_available_services=false&show_injourney_services=true&device_id='
    );
  }
  // For bus searching based on origin and destination
  getAllOriginsDestination(): Observable<any> {
    return this.http.get('https://www.morningstartravels.in/api/destination_pairs.json?response_format=true&app_bima_enabled=false&device_id=');
  }

  filterByOrigin(data: any[], origin: string): any[] {
    return data.filter((route: any) => route.origin.name.toLowerCase().includes(origin.toLowerCase()));
  }

  filterByDestination(data: any[], destination: string, originId: any): any[] {
    return data.filter((route: any) => route.destination.name.toLowerCase().includes(destination.toLowerCase()) && route.origin.id === originId);
  }

  filterByOriginAndDestination(data: any[], origin: string, destination: string): any[] {
    return data.filter((route: any) =>
      route.origin.name.toLowerCase().includes(origin.toLowerCase()) &&
      route.destination.name.toLowerCase().includes(destination.toLowerCase())
    );
  }
  // For ticket simply app dashboard page
  getStatistics(){
  const Jsbody={"api_key":"67INN354NYJ6TPYDYB7O66VBD60QIBPQ","date":"2024-05-23","is_all_service":true,"order_by":{"occupancy":"1:0","performance":"2:0","revenue":"3:0","schedules_summary_active_cancelled":"4:0","time_blocked_seats_booked_released":"5:0","total_pending_quota_seats":"6:0"},"service_id":"","is_from_middle_tier":true,"locale":"en"};

    return this.http.post<any>('http://jpsb-qa1.ticketsimply.co.in/api/dashboard_fetch.json',Jsbody)
  }
}
