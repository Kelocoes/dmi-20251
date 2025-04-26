package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.example.demo.model.Type;
import com.example.demo.repository.ITypesRepository;

@RestController
@RequestMapping("/types")
public class TypesController {
    // \

    @Autowired
    private ITypesRepository typesRepository;

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Type>> getAllTypes() {
        List<Type> types = typesRepository.findAll();
        return ResponseEntity.ok().body(types);
    }
}
