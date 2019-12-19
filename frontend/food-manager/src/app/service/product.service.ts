import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/api/product/list');
  }

  getProductById(id) {
    return this.http.get('/api/product/' + id + '/get');
  }

  createProduct(product) {
    return this.http.post('/api/product/create', product);
  }

  updateProduct(product) {
    return this.http.put('/api/product/' + product.id + '/update', product);
  }

  deleteProduct(product) {
    return this.http.delete('/api/product/' + product.id + '/delete')
  }
}
