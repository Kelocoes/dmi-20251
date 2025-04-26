package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ProductsDTO;
import com.example.demo.model.Products;
import com.example.demo.repository.IProductsRepository;

import lombok.AllArgsConstructor;
import lombok.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")
public class ProductsController {

    private static final Logger logger = LoggerFactory.getLogger(ProductsController.class);

    @Autowired
    private IProductsRepository productsRepository;

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Products>> getProductsByStudentName(@RequestParam String studentName) {
        logger.info("Date: {} - Student Name: {} - Method: GET", 
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()), studentName);
        return ResponseEntity.ok(productsRepository.findByStudentName(studentName));
    }

    @PostMapping
    public ResponseEntity<Object> createProduct(@RequestParam String studentName, @RequestBody ProductsDTO product) {
        productsRepository.saveProductWithStudentName(studentName, 
                product.getProduct(), 
                product.getDescription(), 
                product.getPrice(), 
                product.getQuantity(), 
                product.getImage());
        logger.info("Date: {} - Student Name: {} - Method: POST", 
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()), studentName);
        return ResponseEntity.status(HttpStatus.CREATED).body(new MessageResponse("Product created"));
    }

    @Data
    @AllArgsConstructor
    private static class MessageResponse {
        private String message;
    }
}