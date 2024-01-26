import axios from "axios"
import {Button} from "./Button"
import { useEffect, useState } from "react"
export default function Card () {

    const[todo , setTodo] = useState([])

    const api =  "http://localhost:8000/todo" 

    const mapTodo = async() => {
        const res = await axios.get(api)
        console.log(res);
        setTodo(res.data)
        
    }

    useEffect(() => {

        mapTodo()

    }, []);

    return(
        
      <div className="flex w-fit p-4 gap-4 bg-slate-50 rounded-md ">
         {todo && todo.map((e:any)=>{
        return(
            <div>
            <div>
            <p className="font-bold">{e.title}</p>
             <p>{e.description} </p>
             <div className="flex gap-4">
                 <Button >{e.priority}</Button>
                 <Button >{e.label}</Button>
             </div>
            </div>
           <div className="flex flex-col gap-2">
           <div className="flex h-fit p-1 w-fit rounded-[30%] bg-red-100">X</div>
            <div className="flex h-fit p-1 w-fit rounded-[30%] bg-red-100">E</div>
           </div>
         </div>
        )
       })}
      </div>
    )
 }