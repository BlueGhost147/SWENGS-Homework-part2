import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http: HttpClient) { }

  getProducers() {
    return this.http.get('/api/producer/list');
  }

  getProducersOptions() {
    return this.http.get('/api/producer/options');
  }

  getProducerById(id) {
    return this.http.get('/api/producer/' + id + '/get').pipe(map(producer => (producer as any).name.toString())).pipe(first());
  }
}
