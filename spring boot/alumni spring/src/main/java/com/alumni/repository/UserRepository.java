package com.alumni.repository;

import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.User;

//CrudRepository<User, data type of @Id field of User> ,uncomment block below


public interface UserRepository extends CrudRepository<User, Integer> {

}

