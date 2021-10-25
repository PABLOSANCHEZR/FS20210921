package com.example.domains.entities.dtos;

import java.sql.Timestamp;

import com.example.domains.entities.Category;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class CategoryDTO {
	
	@JsonProperty("idcategoria")
	private int categoryId;
	@JsonProperty("ultimamodificacion")
	private Timestamp lastUpdate;
	@JsonProperty("nombre")
	private String name;
	
	public static Category from(CategoryDTO source) {
		return new Category(
				source.getCategoryId(),
				source.getLastUpdate(),
				source.getName()
				);
	}
	public static CategoryDTO from(Category source) {
		return new CategoryDTO(
				source.getCategoryId(),
				source.getLastUpdate(),
				source.getName()
				);
	}
	
	
}