package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products_type")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductsType {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "type_id", nullable = false)
    @JsonIgnore
    private Type type;

    @ManyToOne
    @JoinColumn(name = "products_id", nullable = false)
    @JsonIgnore
    private Products products;

    @JsonProperty("typeId") // Expone solo el ID de "type"
    public Long getTypeId() {
        return type != null ? type.getId() : null;
    }

    @JsonProperty("productsId") // Expone solo el ID de "products"
    public Long getProductsId() {
        return products != null ? products.getId() : null;
    }
}
