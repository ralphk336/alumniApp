import { Component } from '@angular/core';
import { AlumniGetterService } from '../alumni-getter.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnus } from '../alumnus';

@Component({
  selector: 'app-all-alumni',
  templateUrl: './all-alumni.component.html',
  styleUrls: ['./all-alumni.component.css']
})
export class AllAlumniComponent {
  hasData: boolean=false;
  constructor(
    private alumniGetter : AlumniGetterService
  ){

  }
  public alumni:Alumnus[]=[];
  ngOnInit(): void {
    /*
    when notified of data received then store that data in the mebers variable
    set has data to true for drawing of the table
    */
    this.alumniGetter.getAllAlumni().subscribe(data=>{
      this.hasData=false;
      var entries=Object.entries(data);
      for(var i=0;i<entries.length;i++){
        this.alumni.push(entries[i][1] as Alumnus);
      }
      if(this.alumni.length>0){
        this.hasData=true;
      }
      console.log("members", this.alumni);
    });
    
  }

  printMembers(){
    console.log("Members are",this.alumni);  
  }

}
