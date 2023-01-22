package com.alumni.dto;

public class SubscriberHelper {
	Integer eventId;
	Integer alumnusId;
	
	public SubscriberHelper(Integer eventId, Integer alumnusId) {
		this.eventId = eventId;
		this.alumnusId = alumnusId;
	}
	
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
