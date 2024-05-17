import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {

  constructor(
    private http: HttpClient
  ) { }

  sampleUrl(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
  FilterDataUrl(): Observable<any> {
    return this.http.get('https://www.morningstartravels.in/api/available_routes/2/3/2024-05-18.json?show_only_available_services=false&show_injourney_services=true&device_id=');
  }
}
