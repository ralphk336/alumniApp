import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGetterService {

  constructor(
    private httpClient : HttpClient
  ) { 

  }

  getHeader():Observable<any>{
    return this.httpClient.get("http://localhost:8080/image",{responseType: 'blob'});

  }
}
