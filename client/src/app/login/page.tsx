"use client"
import Image from "next/image";
import axios from "axios"
import { useState } from "react";
import { Result } from "postcss";

export default function Home() {
 
 

  const [input , setInput] = useState({username:"", password:""})
  const [ error , setError] = useState("")

  const api = "http://localhost:8000/auth/login"
  

   const submithandler = async(e:any) => {
   try {
    e.preventDefault()
    const result = await axios.post( api , {...input});
    console.log(result);
   } catch (error:any) {
    setError(error.response.data.msg)
    
   }
    

   }


  return (
   
    <div className="flex h-screen justify-center items-center gap-10 flex-col">
      <p className="font-bold text-2xl">Log in </p>
      <form className="flex flex-col gap-10">
        <label className="flex flex-col gap-4">
          Username 
          <input onChange={(e) => setInput((prev) => ({...prev , username:e.target.value}))} className="rounded-xl p-4" placeholder="Enter your username"></input>
        </label>
        <label className="flex flex-col gap-4">
          Password
          <input onChange={(e) => setInput((prev) => ({...prev , password:e.target.value}))} className="rounded-xl p-4" placeholder="Enter your password"></input>
        </label>
        <button className="bg-blue-200 p-4 rounded-xl h-fit " onClick={submithandler}>Log In</button>
      </form>
    </div>
  );
}
//tailwind merge