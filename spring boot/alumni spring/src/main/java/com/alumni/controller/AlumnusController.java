package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Alumnus;
import com.alumni.repository.AlumnusRepository;

@RestController
@RequestMapping("/api/alumnus")
@CrossOrigin(origins = "http://localhost:4200")
public class AlumnusController {
	AlumnusRepository alumnusRepository;
	
	@Autowired
	public void setAlumnusRepository(AlumnusRepository alumnusRepository) {
		this.alumnusRepository=alumnusRepository;
	}
	
	@GetMapping("")
	public ResponseEntity<List<Alumnus>>  getAllAlumni(){
		Iterable<Alumnus> allAlumniIterable=alumnusRepository.findAll();
		LinkedList<Alumnus> alumniList=new LinkedList<>();
		for(Alumnus alumnus:allAlumniIterable) {
			alumniList.add(alumnus);
		}
		
		return new ResponseEntity<List<Alumnus>>(alumniList,HttpStatus.OK);
	}
	
	
	@GetMapping("/year/{year}")
	public ResponseEntity<List<Alumnus>> getAlumniByYear(@PathVariable("year") final int year){
		List<Alumnus> alumniList=alumnusRepository.findAlumniByCompletionYear(year);
		return new ResponseEntity<List<Alumnus>>(alumniList,HttpStatus.OK);
	}
	
	@GetMapping ("/year/{startYear}/{endYear}")
	public ResponseEntity<List<Alumnus>>  findAlumniByCompletionYearBetween(@PathVariable("startYear") final Integer startYear, @PathVariable("endYear") final Integer endYear){
	    System.out.println("Start Year :"+ startYear + "end year " + endYear);  
		List<Alumnus> alumniListFromYtoY =alumnusRepository.findAlumniByCompletionYearBetween(startYear, endYear);
	    return new ResponseEntity<List<Alumnus>> (alumniListFromYtoY, HttpStatus.OK);
	}
	
	
		
	@PostMapping(value="",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Alumnus> addAlumnus(@RequestBody Alumnus alumnus){
		alumnusRepository.save(alumnus);
		return new ResponseEntity<Alumnus>(alumnus,HttpStatus.OK);
	}
	
	
	@GetMapping("/event/{eventId}")
	public ResponseEntity<List<Alumnus>> getEventSubscriberList(@PathVariable("eventId") Integer eventId){
		List<Alumnus> subscriberList=alumnusRepository.findAllAlumniRegisteredForAnEvent(eventId);
		//System.out.println("Number is "+eventId);
		if(subscriberList.size()==0) {
			return new ResponseEntity<List<Alumnus>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Alumnus>>(subscriberList,HttpStatus.OK);
	}
}
