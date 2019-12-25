import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ProducerService} from "../service/producer.service";
import {ProductService} from "../service/product.service";
import {WarehouseService} from "../service/warehouse.service";

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {

  productFormGroup;
  warehouseOptions;
  producerOptions;
  storageOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              public producerService: ProducerService,
              private productService: ProductService,
              private warehouseService: WarehouseService) {
  }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.warehouseOptions = data.warehouseOptions;
    this.producerOptions = data.producerOptions;
    this.storageOptions = data.storageOptions;

    this.productFormGroup = this.fb.group({
      id: [null],
      product_name: ['', Validators.required],
      producer: [null, Validators.required],
      expiration_date: [null],
      storage: [null, Validators.required],
      dangerous: [null],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService.getProductById(id)
        .subscribe((response) => this.productFormGroup.patchValue(response));
    }
  }

  createProduct() {
    const product = this.productFormGroup.value;

    if (product.id) {
      this.productService.updateProduct(this.productFormGroup.value)
        .subscribe(() => {
          alert('updated');
        });
    } else {
      this.productService.createProduct(this.productFormGroup.value)
        .subscribe(() => {
          alert('created');
          // this.router.navigate(["/productform/"+response.id]);
        });
    }
  }
}
