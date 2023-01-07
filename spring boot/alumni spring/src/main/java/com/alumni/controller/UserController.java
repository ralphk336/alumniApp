package com.alumni.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumni.dto.User;
import com.alumni.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
	UserRepository userRepository;
	
	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository=userRepository;
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
}
