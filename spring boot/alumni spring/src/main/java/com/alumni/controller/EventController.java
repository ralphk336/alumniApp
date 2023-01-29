package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Alumnus;
import com.alumni.dto.CustomUser;
import com.alumni.dto.Event;
import com.alumni.dto.Subscriber;
import com.alumni.dto.User;
import com.alumni.repository.AlumnusRepository;
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
	
	AlumnusRepository alumnusRepository;
	@Autowired
	public void setAlumnusRepository(AlumnusRepository alumnusRepository) {
		this.alumnusRepository=alumnusRepository;
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
	
	@GetMapping("/subscribed")
	public ResponseEntity<List<Event>> getEventSSubscribedByAlumnus(){
		Alumnus alumnus=getAlumnusFromSession();
		if(alumnus==null) {
			return new ResponseEntity<List<Event>>(HttpStatus.NO_CONTENT);
		}
		
		List<Event> eventsSubscribedList=eventRepository.findAllEventsRegisteredByAlumnus(alumnus.getAlumnusId());
		//System.out.println("Number is "+eventId);
		if(eventsSubscribedList.size()==0) {
			return new ResponseEntity<List<Event>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Event>>(eventsSubscribedList,HttpStatus.OK);
	}
	
	@GetMapping("/subscribe/{eventId}")
	public ResponseEntity<HttpStatus> subscribeToEvent(@PathVariable("eventId") Integer eventId){
		//User usr=((CustomUser)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser();
		Alumnus alumnus=getAlumnusFromSession();//alumnusRepository.findByEmail(usr.getUsername());
		if(alumnus==null) {
			return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
		}
		int numRows=eventRepository.subscribeToEvent(eventId, alumnus.getAlumnusId());
		if(numRows<1) {
			System.out.println("Error subscribing alumnus with id "+alumnus.getAlumnusId()+" to event "+eventId);
			return new ResponseEntity<HttpStatus>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	Alumnus getAlumnusFromSession() {
		User usr=((CustomUser)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser();
		Alumnus alumnus=alumnusRepository.findByEmail(usr.getUsername());
		return alumnus;
	}
}
