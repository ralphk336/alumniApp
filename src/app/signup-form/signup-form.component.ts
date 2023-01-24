import { Component } from '@angular/core';
import { data } from 'jquery';
import { AlumniCreateService } from '../alumni-create.service';
import { Alumnus } from '../alumnus';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {


alumnusModel=new Alumnus();

constructor(private createAlumni :AlumniCreateService){


}

registerAlumnus(){

 // console.log(this.alumnusModel);
 this.createAlumni.registerAlumnus(this.alumnusModel).subscribe(data=>{
   console.log('Successfully added alumnus ', data);
 });
}

}
