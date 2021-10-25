package com.example.infraestructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.domains.entities.Language;

public interface LanguageRepository extends JpaRepository<Language, Integer> {

}