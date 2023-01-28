import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {
  url="http://localhost:8080/api/user";

  constructor(private httpUser : HttpClient) { }


  registerUser( userData : User ):Observable<User>{

    console.log(userData)

   return this.httpUser.post<User>(this.url,userData);

   }


}
