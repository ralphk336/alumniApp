import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumnus } from '../alumnus';
import { EventGetterService } from '../event-getter.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit{
  eventId:any;
  subscribers:Alumnus[]=[];

  constructor(
    private route:ActivatedRoute,
    private eventGetterService: EventGetterService
  ){
    this.eventId=route.snapshot.params["id"];
    console.log(this.eventId);
  }

  ngOnInit(): void {
      this.eventGetterService.getEventSubscribers(this.eventId).subscribe(
        data=>{
          this.subscribers=[];
          var entries=Object.entries(data);
          for(var i=0;i<entries.length;i++){
            var subscriber=entries[i][1] as Alumnus;
            this.subscribers.push(entries[i][1] as Alumnus);
          }
        }
      );
  }
}
