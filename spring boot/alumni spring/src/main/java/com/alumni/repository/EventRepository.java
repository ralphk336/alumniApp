package com.alumni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Event;

//CrudRepository<Event, data type of @Id field of Event>

public interface EventRepository extends CrudRepository<Event, Integer> {
	public List<Event> findEventByEventNameContaining(String name);
	
	@Query( 
			value="SELECT events.event_id,events.event_name,events.event_description,events.event_date  FROM events INNER JOIN (SELECT alumnus.alumnus_id,alumnus.name,alumnus.email,alumnus.phone_number, subscribers.event_id FROM alumnus INNER JOIN subscribers ON alumnus.alumnus_id=subscribers.alumnus_id) t1\n"
					+ " ON events.event_id=t1.event_id \n"
					+ " WHERE t1.alumnus_id= ?1"
			,nativeQuery=true
			)
	List<Event> findAllEventsRegisteredByAlumnus(Integer alumnusId);
	
}
