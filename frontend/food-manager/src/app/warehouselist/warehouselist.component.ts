import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {UserService} from "../service/user.service";
import {WarehouseService} from "../service/warehouse.service";

@Component({
  selector: 'app-warehouselist',
  templateUrl: './warehouselist.component.html',
  styleUrls: ['./warehouselist.component.scss']
})
export class WarehouselistComponent implements OnInit {

  warehouses: any[];
  displayedColumns = ['name', 'address', 'area', 'id'];

  constructor(private http: HttpClient, private warehouseService: WarehouseService, public userService: UserService) { }

  ngOnInit() {
    this.warehouseService.getWarehouses()
      .subscribe((response: any[]) => {
        this.warehouses = response;
      });
  }

  deleteWarehouse(warehouse) {
    this.warehouseService.deleteWarehouse(warehouse)
      .subscribe(() => this.ngOnInit());
  }

}
