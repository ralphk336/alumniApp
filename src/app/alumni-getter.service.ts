import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniGetterService implements OnInit{
  constructor(
    private httpClient : HttpClient,
    ) { 

  }

  ngOnInit(): void {
      
  }
  
  getAllAlumni(): Observable<any>{
    var url="http://localhost:8080/api/alumnus"
    var list=[]
    console.log("accessing the api")
    return this.httpClient.get(url);
  }

  getAllAlumniBetween(startYear: string, endYear:string): Observable<any>{
    var url="http://localhost:8080/api/alumnus/year/"+startYear+"/"+endYear;
    console.log("Getting alumni between ",startYear," and" ,endYear," from ",url);
    return this.httpClient.get(url);
  }
}
