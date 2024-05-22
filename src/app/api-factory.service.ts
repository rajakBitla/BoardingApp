import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiFactoryService {
  constructor(private http: HttpClient) {}
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
  sampleUrl(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
  FilterDataUrl(): Observable<any> {
    return this.http.get(
      'https://www.morningstartravels.in/api/available_routes/2/3/2024-05-25.json?show_only_available_services=false&show_injourney_services=true&device_id='
    );
  }
 
}
