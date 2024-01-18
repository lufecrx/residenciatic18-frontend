import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  private readonly vehiclesUrl: string =  '/assets/vehicles.json';

  constructor(private http: HttpClient) { }

  getVehiclesData() : Observable<any> {
    return this.http.get(this.vehiclesUrl);
  }
}
