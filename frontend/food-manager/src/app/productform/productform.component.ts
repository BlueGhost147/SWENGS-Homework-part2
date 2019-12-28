import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ProducerService} from "../service/producer.service";
import {ProductService} from "../service/product.service";
import {WarehouseService} from "../service/warehouse.service";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {

  productFormGroup;
  //warehouseOptions;
  producerOptions;
  storageOptions;
  product_id;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              public producerService: ProducerService,
              private productService: ProductService,
              private warehouseService: WarehouseService) {
  }

  ngOnInit() {

    const data = this.route.snapshot.data;
    //this.warehouseOptions = data.warehouseOptions;
    this.producerOptions = data.producerOptions;
    this.storageOptions = data.storageOptions;

    this.productFormGroup = this.fb.group({
      id: [null],
      product_name: ['', Validators.required],
      producer: [null, Validators.required],
      expiration_date: [null],
      storage: [null, [Validators.required]],
      dangerous: [null],
    }, {
      validator: this.dangerousStorageValidatorFunction()
    });

    this.product_id = this.route.snapshot.paramMap.get('id');

    if (this.product_id) {
      this.productService.getProductById(this.product_id)
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

  dangerousStorageValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      if (this.productFormGroup === undefined || this.productFormGroup.controls['dangerous'].value !== true)
        return null;
      const forbidden = this.productFormGroup.controls['storage'].value !== 'o';
      return forbidden ? {'dangerousStorage': {value: control.value}} : null;
    };
  }

  dangerousStorageValidatorFunction(): Function {
    return (formGroup: FormGroup): void => {
      const field_storage = formGroup.controls['storage'];
      const field_dangerous = formGroup.controls['dangerous'];

      const forbidden = field_storage.value !== 'o' && (field_dangerous.value === true);

      if (forbidden) {
        field_storage.setErrors({'dangerousStorage': {value: field_storage.value}});
      }
      else {
        field_storage.setErrors(null);
      }
    }
  }
}
