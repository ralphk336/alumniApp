import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import {Router} from "@angular/router"
import { Roles } from '../roles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient:HttpClient
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  
  ngOnInit(): void {
    /*
      check if user is logged in. If they are redirect them to appropriate page
    */
      if(localStorage.getItem('role')==Roles.adminRole){
        this.router.navigate(['/allAlumni']);
      }else if(localStorage.getItem('role')==Roles.alumnusRole){
        //TODO : REDIRECT TO ALUMNUS HOME
        this.router.navigate(['/subscribedEvents']);
      }
  }
  get f() { return this.loginForm.controls }

  login() {
    if(this.loginForm.invalid){
      return
    }

    let postdata = {
      email:this.f['email'].value,
      password:this.f['password'].value
    }

    console.log(postdata)
    /*
      check if credentials match
      if user is authenticated a user object will be returned by the server
        indicating their role
        save the username and password in storage for future http requests
        store the role to check if user is allowed to access a certain page

      else server will return a 401 unauthorized error,
        ask user to reenter their credentials
    */
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' +btoa(postdata.email + ':' +postdata.password)
      })
    };

    this.httpClient.get("http://localhost:8080/api/user/details",httpOptions).subscribe(
      data=>{
        console.log("Got the following response from the server when trying to log in :", data);
        localStorage.setItem('authorization',btoa(postdata.email + ':' +postdata.password));
        localStorage.setItem('role',(data as User).role);
        console.log("User has role" , localStorage.getItem('role'));
        console.log("Credentials are ",localStorage.getItem('authorization'));
       if (localStorage.getItem('role') == Roles.adminRole){
        this.router.navigate(['/allAlumni']);
        console.log("success")
       }else if(localStorage.getItem('role')==Roles.alumnusRole){
        //TODO : REDIRECT TO ALUMNUS HOME
        this.router.navigate(['/subscribedEvents']);
       }

      },
      error=>{
        console.log("Error while logging in. Reason :",error);
      }
      
    )

  }
}
