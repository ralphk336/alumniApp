import { Component, OnInit } from '@angular/core';
import { EventGetterService } from '../event-getter.service';


class Event{
  eventId :  Number=0;
  eventName : String="";
  eventDescription : String="";
  eventDate : String=""
  //event comes in as JSON date, need to format it for display
  formattedDate : String="";
}

@Component({
  selector: 'app-event-subscribe',
  templateUrl: './event-subscribe.component.html',
  styleUrls: ['./event-subscribe.component.css']
})
export class EventSubscribeComponent implements OnInit{
  //holds data to be shown by the cards, initially shows everything
  public events:Event []=[];
  //bound to search field
  searchString: string="";
  //holds each event each member is subbed to for quick lookup
  eventsSubscribed:Set<Number>=new Set();


  constructor(
    //deals with all requests relating to events
    private  eventGetter : EventGetterService 
  ){
    
  }

  ngOnInit(): void {
   this.getAllEvents();
  }

  getAllEvents(){
    this.eventGetter.getAllEvents().subscribe(data=>{
      this.assignMembersList(data);  
      }
    )
    //get all events registered for by the user
    this.getAllRegisteredEvents();
  }

  subscribeEvent(event : Event){
    console.log("Subscribing to event ",event);

    //TODO: add code to post data to backend

    //ngif will display the subscribed button

    this.eventGetter.subscribeToEvent(event.eventId).subscribe(
      data=>{
        console.log("Subscribed alumnus to event with id: ",event.eventId);
      },
      error=>{
        console.log("User already subscribed");
      }
    )
    this.eventsSubscribed.add(event.eventId);
  }

  searchForEvent(){
    console.log("Query string"+this.searchString);
    var cleanSearchString=this.searchString.trim();
    if(cleanSearchString.length>0){
      this.eventGetter.getEventByName(cleanSearchString).subscribe(data=>{
          //list will now show what has been searched for
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
      var date=new Date(event.eventDate.toString());
      event.formattedDate=date.toLocaleString("en-GB",{weekday:'long', year: 'numeric', month: 'long', day: 'numeric'})+" "+date.toLocaleTimeString('en-GB');      
      this.events.push(entries[i][1] as Event);
    }

    console.log("events", this.events);
  }

  getAllRegisteredEvents(){
    //TODO : Make this match id of currently logged in user
    this.eventGetter.getAllEventsRegisteredByAlumnus(3).subscribe(data=>{
      var dt=Object.entries(data);
      for(var i=0;i<dt.length;i++){
        var event= dt[i][1] as Event;
        console.log("User is subscribed to event ",event);
        this.eventsSubscribed.add(event.eventId);
      }
      console.log("Number of events registered "+ this.eventsSubscribed.size);
    })
  }
}

