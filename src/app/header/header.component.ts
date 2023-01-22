import { Component } from '@angular/core';
import { ImageGetterService } from '../image-getter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerSrc:any="../assets/wider.jpg";
  
  constructor(
  imageGetter : ImageGetterService
  ){
    imageGetter.getHeader().subscribe(data=>{
      console.log("gotten image");
      const reader= new FileReader();
      reader.onload=(e)=>{this.headerSrc=e.target?.result}
      reader.readAsDataURL(data);
    })
  }
}
