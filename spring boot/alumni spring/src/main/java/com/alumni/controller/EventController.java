package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Event;
import com.alumni.repository.EventRepository;

@RestController
@RequestMapping("/api/event")
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
}