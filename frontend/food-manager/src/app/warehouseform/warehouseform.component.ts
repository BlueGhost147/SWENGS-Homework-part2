import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProducerService} from "../service/producer.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {WarehouseService} from "../service/warehouse.service";

@Component({
  selector: 'app-warehouseform',
  templateUrl: './warehouseform.component.html',
  styleUrls: ['./warehouseform.component.scss']
})
export class WarehouseformComponent implements OnInit {

  warehouseFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private warehouseService: WarehouseService) {
  }

  ngOnInit() {

    this.warehouseFormGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      address: [null, Validators.required],
      area: [null, Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.warehouseService.getWarehouseById(id)
        .subscribe((response) => this.warehouseFormGroup.patchValue(response));
    }
  }

  createWarehouse() {
    const warehouse = this.warehouseFormGroup.value;

    if (warehouse.id) {
      this.warehouseService.updateWarehouse(this.warehouseFormGroup.value)
        .subscribe(() => {
          alert('updated');
        });
    } else {
      this.warehouseService.createWarehouse(this.warehouseFormGroup.value)
        .subscribe(() => {
          alert('created');
          // this.router.navigate(["/warehouseform/"+response.id]);
        });
    }
  }

}
