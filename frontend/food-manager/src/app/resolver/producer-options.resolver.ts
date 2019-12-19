import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ProducerService} from "../service/producer.service";

@Injectable({
  providedIn: 'root'
})
export class ProducerOptionsResolver implements Resolve<Observable<any>> {
  constructor(private producerService: ProducerService) {
  }

  resolve() {
    return this.producerService.getProducers();
  }
}
