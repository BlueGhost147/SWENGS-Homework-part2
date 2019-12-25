import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  getWarehouses() {
    return this.http.get('/api/warehouse/list');
  }

  getWarehousesOptions() {
    return this.http.get('/api/warehouse/options');
  }

  getWarehouseById(id) {
    return this.http.get('/api/warehouse/' + id + '/get');
  }

  createWarehouse(warehouse) {
    return this.http.post('/api/warehouse/create', warehouse);
  }

  updateWarehouse(warehouse) {
    return this.http.put('/api/warehouse/' + warehouse.id + '/update', warehouse);
  }

  deleteWarehouse(warehouse) {
    return this.http.delete('/api/warehouse/' + warehouse.id + '/delete')
  }
}
