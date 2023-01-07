package com.alumni.repository;

import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Event;

//CrudRepository<Event, data type of @Id field of Event>

public interface EventRepository extends CrudRepository<Event, Integer> {

}
