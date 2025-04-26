package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.repository.IProductsRepository;
import com.example.demo.repository.IStudentRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {

    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);

    @Autowired
    IStudentRepository studentRepository;

    @Autowired
    IProductsRepository productsRepository;

    @PostMapping("/register")
    public ResponseEntity<Student> registerStudent(@RequestParam String studentName) {
        Student existingStudent = studentRepository.findByName(studentName).orElse(null);
        if (existingStudent != null) {
            logger.info("Student already registered: {}", studentName);
            return ResponseEntity.badRequest().body(null);
        }

        Student student = new Student();
        student.setName(studentName);
        Student studentSaved = studentRepository.save(student);

        // Save default products
        productsRepository.saveProductWithStudentName(studentName, 
            "Mock Product 1", 
            "Mock Description 1", 
            (long) (Math.random() * 1000), 
            (long) (Math.random() * 1000), 
            "https://picsum.photos/300/300");

        productsRepository.saveProductWithStudentName(studentName, 
            "Mock Product 2", 
            "Mock Description 2", 
            (long) (Math.random() * 1000), 
            (long) (Math.random() * 1000), 
            "https://picsum.photos/300/300");

        productsRepository.saveProductWithStudentName(studentName, 
            "Mock Product 3", 
            "Mock Description 3", 
            (long) (Math.random() * 1000), 
            (long) (Math.random() * 1000), 
            "https://picsum.photos/300/300");

        logger.info("Student registered: {}", studentSaved.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(studentSaved);
    }
}
