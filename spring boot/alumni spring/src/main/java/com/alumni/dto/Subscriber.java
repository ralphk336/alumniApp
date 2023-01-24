package com.alumni.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="subscribers")
public class Subscriber {
	
	 //@JoinColumn(name="event_id", nullable=false)
	//@ManyToOne
   // private Event event;
	
	@Id
	@Column(name="event_id")
	private String eventId;
	
	@Column(name="alumnus_id")
	private String alumnusId;


	public String getEventId() {
		return eventId;
	}

	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public String getAlumnusId() {
		return alumnusId;
	}

	public void setAlumnusId(String alumnusId) {
		this.alumnusId = alumnusId;
	}
	
	
	
}
