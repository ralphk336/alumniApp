import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestBuilder } from './request-builder';

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
    return this.httpClient.get(this.eventBaseUrl,RequestBuilder.buildHeader());
  }

  getEventByName(eventName: string): Observable<any>{
    var url=this.eventBaseUrl+"/name/"+eventName;
    console.log("fetching event data from "+url);
    return this.httpClient.get(url,RequestBuilder.buildHeader());
  }

  // getAllEventsRegisteredByAlumnus(alumnusId:number): Observable<any>{
  //   var url=this.eventBaseUrl+"/alumnus/"+alumnusId;
  //   return this.httpClient.get(url,RequestBuilder.buildHeader());
  // }
  getAllEventsRegisteredByAlumnus(alumnusId:number): Observable<any>{
    var url=this.eventBaseUrl+"/alumnus/"+alumnusId;
    return this.httpClient.get(url,RequestBuilder.buildHeader());
  }

  subscribeToEvent(eventId:Number): Observable<any>{
    var url=this.eventBaseUrl+/subscribe/+eventId;
    return this.httpClient.get(url,RequestBuilder.buildHeader());
  }
}
