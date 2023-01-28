import { Component } from '@angular/core';
import { data } from 'jquery';
import { AlumniCreateService } from '../alumni-create.service';
import { Alumnus } from '../alumnus';
import { User } from '../user';
import { UserCreateService } from '../user-create.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {


alumnusModel=new Alumnus();

userModel =new User();

constructor(private createAlumni :AlumniCreateService, private createUser:UserCreateService){


}

registerAlumnus(){

 // console.log(this.alumnusModel);
 this.createAlumni.registerAlumnus(this.alumnusModel).subscribe(data=>{
   console.log('Successfully added alumnus ', data);
 });

 this.userModel.username=this.alumnusModel.email;
 //this.userModel.password=this.alumnusModel.password;

 this.createUser.registerUser(this.userModel).subscribe(data=>{
  console.log("successfully added user", data)
 })
}

}
