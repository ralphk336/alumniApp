import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventGetterService implements OnInit{

  eventBaseUrl="http://localhost:8080/api/event";

  constructor( private httpClient : HttpClient) { 

  }
  ngOnInit(): void {
      
  }
  
  getAllEvents(): Observable<any>{
    console.log("fetching all event data")
    return this.httpClient.get(this.eventBaseUrl);
  }

  getEventByName(eventName: string): Observable<any>{
    var url=this.eventBaseUrl+"/name/"+eventName;
    console.log("fetching event data from "+url);
    return this.httpClient.get(url);
  }
}
