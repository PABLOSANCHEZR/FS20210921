package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.oas.annotations.EnableOpenApi;

@EnableOpenApi
@SpringBootApplication
public class MegustaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MegustaApplication.class, args);
	}

}
