package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Alumnus;
import com.alumni.dto.Event;
import com.alumni.dto.Subscriber;
import com.alumni.repository.EventRepository;

@RestController
@RequestMapping("/api/event")
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {
	EventRepository eventRepository;
	@Autowired
	public void setEventRepository(EventRepository eventRepository) {
		this.eventRepository=eventRepository;
	}
	
	@GetMapping("")
	public ResponseEntity<List<Event>> getAllEvents(){
		Iterable<Event> eventsIterable=eventRepository.findAll();
		List<Event> eventList=new LinkedList<>();
		for(Event e:eventsIterable) {
			eventList.add(e);
		}
		return new ResponseEntity<List<Event>>(eventList,HttpStatus.OK);
	}
	
	@GetMapping("/name/{eventName}")
	public ResponseEntity<List<Event>> getEventsWithMatchingName(@PathVariable("eventName") String eventName){
		List<Event> events=eventRepository.findEventByEventNameContaining(eventName);
		if(events.size()==0) {
			return new ResponseEntity<List<Event>>(events,HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Event>>(events,HttpStatus.OK);
	}
	
	@GetMapping("/alumnus/{alumnusId}")
	public ResponseEntity<List<Event>> getEventSubscriberList(@PathVariable("alumnusId") Integer alumnusId){
		List<Event> eventsSubscribedList=eventRepository.findAllEventsRegisteredByAlumnus(alumnusId);
		//System.out.println("Number is "+eventId);
		if(eventsSubscribedList.size()==0) {
			return new ResponseEntity<List<Event>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Event>>(eventsSubscribedList,HttpStatus.OK);
	}
	
}
