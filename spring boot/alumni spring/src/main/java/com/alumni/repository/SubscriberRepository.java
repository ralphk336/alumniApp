package com.alumni.repository;

import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Subscriber;
import com.alumni.dto.SubscriberId;

//CrudRepository<Subscriber, data type of @Id field of Subscriber>, uncomment block below


public interface SubscriberRepository extends CrudRepository<Subscriber, SubscriberId> {

}
