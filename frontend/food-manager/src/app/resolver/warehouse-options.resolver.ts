import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {WarehouseService} from "../service/warehouse.service";

@Injectable({
  providedIn: 'root'
})
export class WarehouseOptionsResolver implements Resolve<Observable<any>> {
  constructor(private warehouseService: WarehouseService) {
  }

  resolve() {
    return this.warehouseService.getWarehousees();
  }
}
