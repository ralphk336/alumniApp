package com.alumni.dto;

import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="alumnus")
public class Alumnus {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="alumnus_id")
	private Integer alumnusId;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="completion_year")
	private Integer completionYear;
	
	@Column(name="phone_number")
	private String phoneNumber;
<<<<<<< HEAD
	
	/*
	@ManyToMany(mappedBy="subscribedAlumni")
	List<Event> eventsSubscribed;
	
	
	public List<Event> getEventsSubscribed() {
		return eventsSubscribed;
	}
=======
	 
//	@Column(name="password")
//	private String password;
>>>>>>> 46d434f20459199c1f4ee640d8402faa64a1dee7

	public void setEventsSubscribed(List<Event> eventsSubscribed) {
		this.eventsSubscribed = eventsSubscribed;
	}

	*/
	/*
	@OneToMany(mappedBy="alumnus")
	Set<CompositeTable> subscribedEvents;
	
	
	
	

	public Set<CompositeTable> getSubscribedEvents() {
		return subscribedEvents;
	}

	public void setSubscribedEvents(Set<CompositeTable> subscribedEvents) {
		this.subscribedEvents = subscribedEvents;
	}
	
	*/
	public Integer getAlumnusId() {
		return alumnusId;
	}

<<<<<<< HEAD
=======
//	public String getPassword() {
//		return password;
//	}

//	public void setPassword(String password) {
//		this.password = password;
//	}
>>>>>>> 46d434f20459199c1f4ee640d8402faa64a1dee7

	public void setAlumnusId(Integer alumnusId) {
		this.alumnusId = alumnusId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getCompletionYear() {
		return completionYear;
	}

	public void setCompletionYear(Integer completionYear) {
		this.completionYear = completionYear;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	
}
