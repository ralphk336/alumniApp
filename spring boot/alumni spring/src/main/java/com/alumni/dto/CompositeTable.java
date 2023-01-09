package com.alumni.dto;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class CompositeTable {
	@EmbeddedId
	CompositeKey Id;
	
	@ManyToOne
	@MapsId("alumnusId")
	@JoinColumn(name="alumnus_id")
	Alumnus alumnus;
	
	@ManyToOne
	@MapsId("eventId")
	@JoinColumn(name="course_id")
	Event event;
}
