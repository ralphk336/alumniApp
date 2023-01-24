package com.alumni.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Alumnus;
import com.alumni.dto.Subscriber;
import com.alumni.repository.SubscriberRepository;

@RestController
@RequestMapping("/api/subscribe")
public class SubscriberController {
	
	 SubscriberRepository subscriberRepository;
	 
	 public void setSubscriberRepository(SubscriberRepository subscriberRepository) {
		 
		 this.subscriberRepository=subscriberRepository;
	 }

	 
	 
//	 @PostMapping("/subscribeToEvent/")
//		public ResponseEntity<String> SubscribeToEvent(@RequestBody Subscriber subscribe){
//			subscriberRepository.save(subscribe);
//			return  ResponseEntity.ok("subscribed to an event");
//	}
	 
	 @GetMapping ("/{eventId}/{userId}")
		public ResponseEntity<string>  
		findeventIduserId(@PathVariable("eventId") final Integer eventId, @PathVariable("userId") final Integer userId){
			
			

		     
		}
		
	 
	 
	 
}
