package com.alumni.dto;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CompositeKey implements Serializable {
	@Column(name="alumnus_id")
	Integer alumnusId;
	
	@Column(name="event_id")
	Integer eventId;

	public Integer getAlumnusId() {
		return alumnusId;
	}

	public void setAlumnusId(Integer alumnusId) {
		this.alumnusId = alumnusId;
	}

	public Integer getEventId() {
		return eventId;
	}

	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}
	
	
}
