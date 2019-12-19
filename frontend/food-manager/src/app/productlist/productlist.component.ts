import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {HttpClient} from "@angular/common/http";
import {ProducerService} from "../service/producer.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products: any[];
  displayedColumns = ['product_name', 'producer', 'expiration_date', 'storage', 'id'];

  constructor(private http: HttpClient, private productService: ProductService, public producerService: ProducerService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((response: any[]) => {
        this.products = response;
      });
  }

  deleteProduct(product) {
    this.productService.deleteProduct(product)
      .subscribe(() => this.ngOnInit());
  }
}
