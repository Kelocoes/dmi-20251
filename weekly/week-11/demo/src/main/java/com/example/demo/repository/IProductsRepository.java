package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Products;

import jakarta.transaction.Transactional;

public interface IProductsRepository extends JpaRepository<Products, Long> {
    
    @Query("SELECT p FROM Products p JOIN p.student s WHERE s.name = :studentName")
    List<Products> findByStudentName(String studentName);

    @Query(value = "INSERT INTO products (student_id, product, description, price, quantity, image) " +
        "SELECT s.id, :productName, :description, :price, :quantity, :image " +
        "FROM student s WHERE s.name = :studentName", nativeQuery = true)
    @Modifying(clearAutomatically = true)
    @Transactional
    int saveProductWithStudentName(String studentName, 
        String productName,
        String description,
        Long price,
        Long quantity,
        String image);
}
