import { Component } from '@angular/core';
import { AlumniGetterService } from '../alumni-getter.service';
import { Alumnus } from '../alumnus';

@Component({
  selector: 'app-alumni-between',
  templateUrl: './alumni-between.component.html',
  styleUrls: ['./alumni-between.component.css']
})
export class AlumniBetweenComponent {
  startYear: string="";
  endYear : string="";
  alumni : Alumnus[]=[];
  constructor(
    private alumniGetter :AlumniGetterService
  ){
  }
  findAlumniBetween(){
    
    if(!(this.startYear==="" || this.endYear==="")){
      if(parseInt(this.startYear)>parseInt(this.endYear)){
        console.log("Invalid range provided");
        return;
      }
      console.log("Finding alumni between ",this.startYear," and ",this.endYear)
      this.alumniGetter.getAllAlumniBetween(this.startYear,this.endYear).subscribe(
        data=>{
          this.alumni=[];
          for(var i=0;i<data.length;i++){
            var alumnus=data[i] as Alumnus;
            //console.log(al.name);
            this.alumni.push(alumnus);
          }
          console.log("Alumni has ",this.alumni.length," members");
        }
      )
    }else{
      console.log("No data provided for search");
    }
  } 
}
