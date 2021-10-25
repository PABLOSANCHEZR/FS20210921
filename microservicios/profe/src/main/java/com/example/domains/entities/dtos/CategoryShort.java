package com.example.domains.entities.dtos;

import org.springframework.beans.factory.annotation.Value;

public interface CategoryShort {
int getcategory_id();
	
	@Value("#{target.category_id + ', ' + target.name}")
	String getNombreCompleto();

}