import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnus } from './alumnus';

@Injectable({
  providedIn: 'root'
})

export class GetMembersService implements OnInit{
  constructor(
    private httpClient : HttpClient,
    ) { 

  }

  ngOnInit(): void {
      
  }
  private  allMembersList:any=["tomato"];
  /*
  getAllMembers():any{
    var url="http://localhost:8080/api/alumnus"
    var list=[]
    console.log("accessing the api")
    var result=this.httpClient.get(url);
    result.subscribe(e=>{console.log(e);this.allMembersList=e});
    return this.allMembersList;
  }
  */
  getAllMembers(): Observable<any>{
    var url="http://localhost:8080/api/alumnus"
    var list=[]
    console.log("accessing the api")
    return this.httpClient.get(url);
  }

}
