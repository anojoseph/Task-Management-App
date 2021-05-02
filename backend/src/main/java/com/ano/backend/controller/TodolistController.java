package com.ano.backend.controller;
import java.util.Collection;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ano.backend.model.Todolist;
import com.ano.backend.repository.TodolistRepository;

@CrossOrigin // to access from anywhere
@RestController
public class TodolistController {
	
	@Autowired
	private TodolistRepository repo;
	
	
	@PostMapping("/set")
	public String saveTask(@RequestBody Todolist todolist) {
		repo.save(todolist);
		return "Task saved successfully";
	}
	@GetMapping("/get")
	public Collection<Todolist> GetList() {
		return repo.findAll();
	}
	
	  @DeleteMapping("/delete/{id}")
	    public String delete(@PathVariable("id") String id) {
	         repo.deleteById(id);
	         return("succsfully deleted");
	 }
	  @PutMapping("/edit")
	    public Todolist edit(@RequestBody Todolist newTodolist) {
	       	Todolist oldTodolist = repo.findById(newTodolist.getId()).orElse(null);
	       	oldTodolist.setStatus(newTodolist.getStatus());
	        repo.save(oldTodolist);
	        return oldTodolist;
	  }
	  
	}