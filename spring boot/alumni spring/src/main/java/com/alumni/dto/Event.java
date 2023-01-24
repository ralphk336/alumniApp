package com.alumni.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="events")
public class Event {
	
	 
	//unidirectional one to many
	
//	 @OneToMany(cascade=CascadeType.ALL)
//	 @JoinColumn(name="new_sub_id", referencedColumnName="event_id")
//	 private List<Subscriber> subscribers;
	
//	public List<Subscriber> getSubscribers() {
//		return subscribers;
//	}
//
//
//	public void setSubscribers(List<Subscriber> subscribers) {
//		this.subscribers = subscribers;
//	}


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="event_id")
	private Integer eventId;
	
	@Column(name="event_name")
	private String eventName;
	
	@Column(name="event_description")
	private String eventDescription;
	
	
	@Column(name = "event_date", columnDefinition = "TIMESTAMP")
	private LocalDateTime eventDate;


	public Integer getEventId() {
		return eventId;
	}


	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}


	public String getEventName() {
		return eventName;
	}


	public void setEventName(String eventName) {
		this.eventName = eventName;
	}


	public String getEventDescription() {
		return eventDescription;
	}


	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}


	public LocalDateTime getEventDate() {
		return eventDate;
	}


	public void setEventDate(LocalDateTime eventDate) {
		this.eventDate = eventDate;
	}
	
	
}
