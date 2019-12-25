import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  getStorageTypes() {
    return this.http.get('/api/storage/options');
  }

  getStorageNameById(id) {
    return this.http.get('/api/storage/'+id+'/get');
      //.pipe(filter(storage => (storage as any).id = id))
     // .pipe(map(storage => (storage as any)[1]));
  }
}
