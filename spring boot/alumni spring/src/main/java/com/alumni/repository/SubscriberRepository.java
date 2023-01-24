package com.alumni.repository;

import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Subscriber;



//CrudRepository<Subscriber, data type of @Id field of Subscriber>, uncomment block below

public interface SubscriberRepository extends CrudRepository<Subscriber, Integer> {

}

