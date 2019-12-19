import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from "../service/storage.service";

@Injectable({
  providedIn: 'root'
})
export class StorageOptionsResolver implements Resolve<Observable<any>> {
  constructor(private storageService: StorageService) {
  }

  resolve() {
    return this.storageService.getStorageTypes();
  }
}
