package com.example.domains.entities;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Contacto {
	@Id
	@Field("_id")
	private int id;
	private String tratamiento;
	private String nombre;
	private String apellidos;
	private String telefono;
	private String email;
	private String sexo;
	private LocalDate nacimiento;
	private String avatar;
	private boolean conflictivo = false;
}
