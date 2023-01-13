package com.alumni.dto;

import jakarta.persistence.Column;

public class Subscriber {

	@Column(name="event_id")
	private String eventId;
	
	@Column(name="alumnus_id")
	private String alumnusId;
	
}
