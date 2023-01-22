package com.alumni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Alumnus;

public interface AlumnusRepository extends CrudRepository<Alumnus, Integer> {
	public List<Alumnus> findAlumniByCompletionYear(Integer year);
	public List<Alumnus> findAlumniByCompletionYearBetween(Integer startYear, Integer endYear);

	@Query( 
			value="SELECT t1.alumnus_id,t1.name,t1.email,t1.completion_year,t1.phone_number  FROM events INNER JOIN (SELECT alumnus.alumnus_id,alumnus.name,alumnus.email,alumnus.completion_year,alumnus.phone_number, subscribers.event_id FROM alumnus INNER JOIN subscribers ON alumnus.alumnus_id=subscribers.alumnus_id) t1\n"
					+ " ON events.event_id=t1.event_id \n"
					+ " WHERE events.event_id= ?1"
			,nativeQuery=true
			)
	List<Alumnus> findAllAlumniRegisteredForAnEvent(Integer eventId);
}
