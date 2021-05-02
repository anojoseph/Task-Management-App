package com.ano.backend.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ano.backend.model.Todolist;

@Repository // defining repository for using mongodb
public interface TodolistRepository extends MongoRepository<Todolist,String> {
}
