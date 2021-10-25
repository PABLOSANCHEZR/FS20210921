package com.example.domains.entities.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language; 


@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {
	
	@JsonProperty("id_pelicula")
	private int filmId;
	@JsonProperty("titulo")
	private String title;
	@JsonProperty("descripcion")
	private String description;
	@JsonProperty("idioma")
	private Language language;
	
	public static Film from(FilmDTO source) {
		return new Film(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage()
				);
	}

	public static FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage()
				);
	}

	
	

}