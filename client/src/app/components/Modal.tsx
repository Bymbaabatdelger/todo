import { MouseEventHandler, useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

const [input ,  setInput] = useState({
    title:"",
    description:"",
    priority:"",
    status:"",
    label:"",
})

const api =  "http://localhost:8000/todo"

const taskHandler = async(e:any) => {
    e.preventDefalt()
  try {
    const res = await axios.post(api , {...input})
    console.log(res);
  } catch (error) {
   
    console.log(error);
    
  }
   
}



export default function Modal({ onClick}:{onClick:MouseEventHandler}) {
    return(
        <div className="flex flex-col p-4  gap-2 bg-gray-100 rounded-xl h-fit w-fit">
        <p>Add task</p>
        <label>
          <p>Title</p>
          <input onChange={(e) => setInput((prev) => ({...prev , title:e.target.value}))} placeholder="title" className="rounded-md"></input>
        </label>
        <label>
          <p>Desciption</p>
          <input  onChange={(e) => setInput((prev) => ({...prev , description:e.target.value}))} placeholder="description" className="rounded-md"></input>
        </label>
        <label>
          <p>Status</p>
          <select onChange={(e) => setInput((prev) => ({...prev , status:e.target.value}))} className="w-full rounded-md">
          <option>choose</option>
            <option>To Do</option>
            <option> In Progress</option>
            <option>Completed</option>
          </select>
        </label>
        <label>
          <p>Priority</p>
          <select onChange={(e) => setInput((prev) => ({...prev , priority:e.target.value}))} className="w-full rounded-md">
          <option>choose</option>
            <option>High</option>
            <option> Medium</option>
            <option>Low</option>
          </select>
        </label>
        <label>
          <p>Label</p>
          <input onChange={(e) => setInput((prev) => ({...prev , label:e.target.value}))} placeholder="label" className="rounded-md"></input>
        </label>
        <Button onClick={onClick} title="Add task "></Button>
        <button onClick={taskHandler}>asd</button>
        
      </div>
    )
}