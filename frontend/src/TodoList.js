import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';
import logo from './check-circle.svg';
import logo2 from './circle.svg';
import { DeleteOutlined ,PlusOutlined } from "@ant-design/icons";



function TodoList() {
    const [name, setName] = useState(""); //To set task name
    const [status,setStatus] = useState("Created"); // to set task status
    const [tasks,setTasks] = useState([]); //for retriving task from backend to an array
    const [stylevariable, setStylevariable] = useState(false); //used for conditional styling

    useEffect( ()=>
    {
        
      axios.get("http://localhost:8080/get")// sending get request to backend to fetch all tasks details
          .then((res)=>{
              setTasks(res.data)
              
              
          })  
    }, )
    const addTask = () => // sending task details to the backend fing into database
    {
        console.log(name);
        console.log(status);
        console.log(tasks);
        axios.post("http://localhost:8080/set",{ 
                name:name,
                status:status
                }).then(()=>{ 
                    console.log("data sended successfully")
                    setName(" ");
        })
        setStylevariable(false)

    }
    const deleteTask = (id) =>{ // Deleting task
        console.log("delete function")
        axios.delete("http://localhost:8080/delete/"+id,{ 
                
                }).then(()=>{ 
                    console.log("data deleted successfully")
        })
    }
    const updateTask = (task) =>{ // updating status
        console.log("edit function",task)
        if(task.status == "Created"){
            task.status = "Completed"
        }
        else{
            task.status = "Created"
        }
        axios.put("http://localhost:8080/edit",{
                id:task.id, 
                name:task.name,
                status:task.status
                }).then(()=>{ 
                    console.log("data updated successfully")
        })
    }
    const changeDisplay = () => // changing stylevariable used for hiding hiding and displaying text field
    {
        setStylevariable(true)
    }
   
    return (
       
        <div>
            <div className="box">
                <div className="heading">
                    <h3>Add Tasks</h3>
                </div>
                <div className="container">
                    <div className="text-center">
                        <button className=" buttn" onClick={changeDisplay}><div className="add-button text-center" >
                            <PlusOutlined /></div>
                        </button> 
                    </div>
                    <div   style={{ display: stylevariable? 'block':'none'}} className="add-task"> 
                        <input type="text" placeholder="Enter Task.." className="inputtext"  value ={name} name = "name" onChange={(e)=>{setName(e.target.value)}} ></input>
                        <button type="button" className="btn btn-outline-success save-button" onClick={addTask}>Save</button>
                    </div>
                    {
                        tasks.map(task => 
                        <div className="task-list"> 
                            <img src={task.status == "Completed" ? logo : logo2} className="logo" onClick={(e)=>updateTask(task)}></img>
                            <div className="task-name">
                                <h4 className="text-center"  style={{ textDecorationLine: task.status == "Completed"? 'line-through' :'none' }}>{task.name}</h4>
                            </div>
                            <button type="button" className="btn btn-outline-danger delete-button" onClick={(e)=>deleteTask(task.id)} ><DeleteOutlined /></button>
                        </div>
                        )
                    }
                    
                </div>
                <br />
                <br />
                
            </div>
        </div>
    
    )
}

export default TodoList

