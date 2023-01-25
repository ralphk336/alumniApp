import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
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
  }
}
