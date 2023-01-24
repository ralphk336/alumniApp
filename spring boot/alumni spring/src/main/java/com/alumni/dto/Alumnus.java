package com.alumni.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
	 
	@Column(name="password")
	private String password;

	public Integer getAlumnusId() {
		return alumnusId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

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
