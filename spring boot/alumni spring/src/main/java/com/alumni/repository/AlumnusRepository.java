package com.alumni.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.alumni.dto.Alumnus;

public interface AlumnusRepository extends CrudRepository<Alumnus, Integer> {
	public List<Alumnus> findAlumniByCompletionYear(Integer year);
	public List<Alumnus> findAlumniByCompletionYearBetween(Integer startYear, Integer endYear);

}
