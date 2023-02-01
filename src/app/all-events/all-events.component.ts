import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../event';
import { EventGetterService } from '../event-getter.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {
  events: Event []=[];

  constructor(
    private eventGetterService: EventGetterService,
    private router:Router
    ){
      this.getAllEvents();

    }

    getAllEvents():void{
      this.eventGetterService.getAllEvents().subscribe(
        data=>{
          this.events=[];
          var entries=Object.entries(data);
          for(var i=0;i<entries.length;i++){
            var event=entries[i][1] as Event;
            var date=new Date(event.eventDate.toString());
            event.formattedDate=date.toLocaleString("en-GB",{weekday:'long', year: 'numeric', month: 'long', day: 'numeric'})+" "+date.toLocaleTimeString('en-GB');      
            this.events.push(entries[i][1] as Event);
          }

          console.log("events", this.events);
        }
      )
    }

    showSubscribers(event:Event){
      console.log(event);
      this.router.navigate(['/subscribers',event.eventId])
    }
}
