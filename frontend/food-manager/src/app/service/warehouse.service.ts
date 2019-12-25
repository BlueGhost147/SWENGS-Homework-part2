import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  getWarehousees() {
    return this.http.get('/api/warehouse/list');
  }

  getWarehousesOptions() {
    return this.http.get('/api/warehouse/options');
  }

  getWarehouseById(id) {
    return this.http.get('/api/warehouse/' + id + '/get');
  }
}
