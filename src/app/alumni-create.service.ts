import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumnus  } from './alumnus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniCreateService {

  url="http://localhost:8080/api/alumnus";


  constructor(private httpVariable  :HttpClient) {

   }

   registerAlumnus( alumnusData : Alumnus ):Observable<Alumnus>{

    console.log(alumnusData)

   return this.httpVariable.post<Alumnus>(this.url,alumnusData);

   }

}
