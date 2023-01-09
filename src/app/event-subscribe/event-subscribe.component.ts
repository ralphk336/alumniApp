import { Component, OnInit } from '@angular/core';
import { EventGetterService } from '../event-getter.service';


class Event{
  eventId :  Number=0;
  eventName : String="";
  eventDescription : String="";
  eventDate : String=""
  formattedDate : String="";
}

@Component({
  selector: 'app-event-subscribe',
  templateUrl: './event-subscribe.component.html',
  styleUrls: ['./event-subscribe.component.css']
})
export class EventSubscribeComponent implements OnInit{
  public events:Event []=[];
  hasEvents : boolean = false;
  searchString: string="";

  constructor(
    private  eventGetter : EventGetterService 
  ){
    
  }

  ngOnInit(): void {
    this.eventGetter.getAllEvents().subscribe(data=>{
      this.assignMembersList(data);
      }
        )
  }

  subscribeEvent(event : Event){
    console.log("Subscribing to event ",event);
  }

  searchForEvent(){
    console.log("Query string"+this.searchString);
    var cleanSearchString=this.searchString.trim();
    if(cleanSearchString.length>0){
      this.eventGetter.getEventByName(cleanSearchString).subscribe(data=>{
          this.assignMembersList(data);
      })
    console.log("found all events with matching names");
    }
  }
  
  assignMembersList(data:any){
    this.events=[];
    var entries=Object.entries(data);
    for(var i=0;i<entries.length;i++){
      var event=entries[i][1] as Event;
      event.formattedDate=new Date(event.eventDate.toString()).toString()      
      this.events.push(entries[i][1] as Event);
    }
    if(this.events.length>0){
      this.hasEvents=true;
    }
    console.log("events", this.events);
  }
}

