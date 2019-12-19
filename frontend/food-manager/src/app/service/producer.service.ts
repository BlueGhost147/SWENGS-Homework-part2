import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http: HttpClient) { }

  getProducers() {
    return this.http.get('/api/producer/list');
  }

  getProducerById(id) {
    return this.http.get('/api/producer/' + id + '/get');
  }
}
