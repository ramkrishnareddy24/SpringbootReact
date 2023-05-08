package com.example.EcomProduct.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EcomProduct.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	
}
