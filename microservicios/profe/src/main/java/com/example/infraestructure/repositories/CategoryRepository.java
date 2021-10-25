package com.example.infraestructure.repositories;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Category;
import com.example.domains.entities.dtos.CategoryDTO;
import com.example.domains.entities.dtos.CategoryShort;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category> findByNameStartingWithOrderByNameDesc(String prefijo);
	List<Category> findByLastUpdateGreaterThan(LocalDate fecha);
	
//	List<CategoryDTO> findByCategoryIdNotNull();
//	List<CategoryShort> findByCategoryIdNotNull();
	<T> List<T> findByCategoryIdNotNull(Class<T> type);
	
	@Query("FROM Category a WHERE a.lastUpdate > ?1")
	List<Category> laMia(Date fecha);
}