package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ProductsType;
import com.example.demo.repository.IProductsRepository;
import com.example.demo.repository.IProductsTypesRepository;
import com.example.demo.repository.ITypesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/product-types")
public class ProductTypesController {

    @Autowired
    private IProductsTypesRepository productTypesRepository;

    @Autowired
    private IProductsRepository productsRepository;

    @Autowired
    private ITypesRepository typesRepository;

    @PostMapping("/products/{productId}/types/{typeId}")
    public ResponseEntity<String> AssignProductTypeToProduct(
            @PathVariable Long productId,
            @PathVariable Long typeId) {
            
        // Check if product and type exists, if not return 404
        if (!productsRepository.existsById(productId)) {
            return ResponseEntity.notFound().build();
        }

        if (!typesRepository.existsById(typeId)) {
            return ResponseEntity.notFound().build();
        }

        // Create a new product type and set the product and type
        ProductsType productType = new ProductsType();
        productType.setProducts(productsRepository.findById(productId).get());
        productType.setType(typesRepository.findById(typeId).get());

        // Save the product type to the database
        productTypesRepository.save(productType);

        
        return ResponseEntity.ok("Product type assigned successfully");
    }
    
}
