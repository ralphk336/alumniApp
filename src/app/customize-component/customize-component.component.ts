import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ImageGetterService } from '../image-getter.service';

@Component({
  selector: 'app-customize-component',
  templateUrl: './customize-component.component.html',
  styleUrls: ['./customize-component.component.css'],
  providers: [MessageService]
})
export class CustomizeComponentComponent {
  constructor(
    private messageService: MessageService
    ){
    
  }
  uploadDone(event:any){
    console.log("Upload complete");
    this.messageService.add({severity:'success', summary:'Upload succeeded', detail:'Image successfully uploaded to the database'});
  }

  errorFunction(event:any){
    console.log("Error while uploading");
    console.log(event);
    this.messageService.add({severity:'error', summary:'Upload failed', detail:'Ran into an issue uploading the image'});

  }
}
