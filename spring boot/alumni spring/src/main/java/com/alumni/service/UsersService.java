package com.alumni.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.alumni.dto.CustomUser;
import com.alumni.dto.User;
import com.alumni.repository.UserRepository;

@Service
public class UsersService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=userRepository.findUserByUsername(username);
		if(user==null) {
			throw new UsernameNotFoundException("Could not find user with username { "+username+" }");
		}
		return new CustomUser(user);
	}

}
