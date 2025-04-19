package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProductsDTO {

    private String product;
    private String description;
    private Long price;
    private Long quantity;
    private String image;
}
