package com.ano.backend.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todolist") //defining collection name
public class Todolist {

	@Id // defining primary key
	String id;
	String name;
	String status;
	
	public Todolist(String id, String name, String status) { //constructor 
		this.id = id;
		this.name = name;
		this.status = status;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}									
	public void setName(String name) { 
		this.name = name;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
