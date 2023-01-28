import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  resetForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get f() { return this.resetForm.controls }

  reset() {
    if(this.resetForm.invalid){
      return
    }
    let postdata = {
      email:this.f['email'].value,
    }
    console.log(postdata)
  }
}
