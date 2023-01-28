package com.alumni.dto;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="subscribers")
public class Subscriber {
	@EmbeddedId
	SubscriberId subscriberId;

	public SubscriberId getSubscriberId() {
		return subscriberId;
	}

	public void setSubscriberId(SubscriberId subscriberId) {
		this.subscriberId = subscriberId;
	}
	
	
	
}
