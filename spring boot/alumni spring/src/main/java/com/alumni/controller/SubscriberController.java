package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Subscriber;
import com.alumni.dto.SubscriberHelper;
import com.alumni.dto.SubscriberId;
import com.alumni.repository.SubscriberRepository;

@RestController
@RequestMapping("/subscriber")
public class SubscriberController {

	@Autowired
	SubscriberRepository subscriberRepository;
	
	@GetMapping("")
	public ResponseEntity<List<Subscriber>> getAllSubscribers(){
		Iterable<Subscriber> subs=subscriberRepository.findAll();
		LinkedList<Subscriber> subsList=new LinkedList<>();
		for(Subscriber s: subs) {
			subsList.add(s);
		}
		return new ResponseEntity<List<Subscriber>>(subsList,HttpStatus.OK);
	}
	
	@PostMapping(value="",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Subscriber> registerForEvent(@RequestBody SubscriberHelper s){
		Subscriber sub=new Subscriber();
		SubscriberId subId=new SubscriberId();
		subId.setEventId(s.getEventId());
		subId.setAlumnusId(s.getAlumnusId());
		sub.setSubscriberId(subId);
		subscriberRepository.save(sub);
		return new ResponseEntity<Subscriber>(sub,HttpStatus.OK);
	}
}
