package com.alumni.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Image;

public interface ImageRepository extends CrudRepository<Image,Long> {
	Image findByImageName(String name);
	Image findTopByOrderByIdDesc();
}
