"use client"
import axios from "axios"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SizeEnum, Title } from "../components/Title";
import { Button } from "../components/Button";

export default function Home() {
 
 

  const [input , setInput] = useState({username:"", password:""})
  const [ error , setError] = useState("")
  const router = useRouter()

  const api = "http://localhost:8000/auth/login"
  

   const submithandler = async(e:any) => {
     e.preventDefault()
   try {
   
    const {data} = await axios.post( api , {...input});
    console.log(data);

    localStorage.setItem("data" , JSON.stringify(data.user))

    router.push("/dashboard")

   } catch (error:any) {
    setError(error.response.data.msg)
   }
  
   }

  return (
   
    <div className="flex h-screen justify-center items-center gap-10 flex-col">
    <Title size={SizeEnum.S}>Log in </Title>
      <form className="flex flex-col gap-10">
        <label className="flex flex-col gap-4">
          Username 
          <input onChange={(e) => setInput((prev) => ({...prev , username:e.target.value}))} type="text" className="rounded-xl p-4" placeholder="Enter your username"></input>
        </label>
        <label className="flex flex-col gap-4">
          Password
          <input onChange={(e) => setInput((prev) => ({...prev , password:e.target.value}))} type="password" className="rounded-xl p-4" placeholder="Enter your password"></input>
        </label>

        {error && <p className="text-red-500 my-2">{error}</p>}

      <Button onClick={submithandler} title="Log In"></Button>
      </form>
    </div>
  );
}
//tailwind merge