package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Student;

public interface IStudentRepository extends JpaRepository<Student, Long> {    
    Optional<Student> findByName(String studentName);
}
