package com.alumni.dto;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class SubscriberId implements Serializable {
	@Column(name="event_id",nullable=false)
	Integer eventId;

	@Column(name="alumnus_id",nullable=false)
	Integer alumnusId;

	public Integer getEventId() {
		return eventId;
	}

	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}

	public Integer getAlumnusId() {
		return alumnusId;
	}

	public void setAlumnusId(Integer alumnusId) {
		this.alumnusId = alumnusId;
	}
	
	
}
