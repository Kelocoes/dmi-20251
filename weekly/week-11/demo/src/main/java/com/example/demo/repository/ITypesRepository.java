package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Type;

public interface ITypesRepository extends JpaRepository<Type, Long> {
    
}
