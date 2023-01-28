package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.Alumnus;
import com.alumni.dto.CustomUser;
import com.alumni.dto.User;
import com.alumni.repository.AlumnusRepository;
import com.alumni.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	UserRepository userRepository;
	AlumnusRepository alumnusRepository;
	
	
	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository=userRepository;
	}
	
	@Autowired
	public void setAlumnusRepository(AlumnusRepository alumnusRepository) {
		this.alumnusRepository=alumnusRepository;
	}
	
	@GetMapping("")
	public ResponseEntity<List<User>> getAllUsers(){
		Iterable<User> usersIterable=userRepository.findAll();
		List<User> userList=new LinkedList<>();
		for(User e:usersIterable) {
			userList.add(e);
		}
		return new ResponseEntity<List<User>>(userList,HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<User> addUser(@RequestBody User user){
		user.setRole("alumnus");
		userRepository.save(user);
		return new ResponseEntity<User>(user,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/details")
	public ResponseEntity<User> getCurrentUser(){
		User usr=getLoggedInUser();
		if(usr==null) {
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		}
		usr.setPassword(null);
		return new ResponseEntity<User>(usr, HttpStatus.OK);

	}
	
	@GetMapping("/role")
	public ResponseEntity<String> getRole(){
		User loggedInUser=getLoggedInUser();
		if(loggedInUser==null) {
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}
		return new ResponseEntity<String>(loggedInUser.getRole(),HttpStatus.OK);
		
	}
	
	@GetMapping("/alumnus_details")
	public ResponseEntity<Alumnus> getLoggedInAlumnusDetails(){
		User loggedInUser=getLoggedInUser();
		if(loggedInUser==null) {
			return new ResponseEntity<Alumnus>(HttpStatus.FORBIDDEN);
		}
		
		Alumnus alumnus=alumnusRepository.findByEmail(loggedInUser.getUsername());
		System.out.println(loggedInUser.getUsername());
		if(alumnus==null) {
			return new ResponseEntity<Alumnus>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Alumnus>(alumnus,HttpStatus.OK);
		
	}
	
	
	User getLoggedInUser() {
		Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
		if(authentication.getPrincipal() instanceof CustomUser) {
			User loggedInUser=((CustomUser)authentication.getPrincipal()).getUser();
			return loggedInUser;
		}
		return null;
	}
}
