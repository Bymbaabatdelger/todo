"use client"

import { useState } from "react"
import { Button } from "../components/Button"
import { SizeEnum, Title } from "../components/Title"
import { useRouter } from "next/navigation"
import axios from "axios"

type signUpType = {
    usename: string,
    password: string,
    repassword:string,
}

export default function Home () {
const [input , setInput] = useState({username : "", password : "", repassword : ""})
const [error , setError] = useState("")
const router = useRouter();

const api = "http://localhost:8000/auth/signup"

const handleSignUp = async(e:any) => {
    e.preventDefault();

    const keys = {
        username:input.username , 
        password:input.password,
        repassword:input.repassword,
    }



    try {
        const user = await axios.post(api , {keys});
        console.log(user);
        if(input.password !== input.repassword){
            console.error("password does not match")
            alert("Password does not match")
            return;
        }
        router.push("/login")
        
    } catch (error:any) {
        setError("Invalid request")
        console.log(error);
        
    }

}

    return(
        <div  className="flex h-screen justify-center items-center gap-10 flex-col">
            <Title size={SizeEnum.S}>Sign up</Title>
            <form  className="flex flex-col gap-10">
                <label className="flex flex-col gap-4">
                    Username 
                    <input value={input.username} onChange={(e)=>setInput((prev) => ({...prev , username:e.target.value}))} placeholder="Enter your username" type="text" className="rounded-xl p-4" ></input>
                </label>
                <label className="flex flex-col gap-4">
                    Password 
                    <input value={input.password}  onChange={(e)=>setInput((prev) => ({...prev , password:e.target.value}))}  placeholder="Enter your password" type="password" className="rounded-xl p-4" ></input>
                </label>
                <label className="flex flex-col gap-4">
                    Re-password
                    <input value={input.repassword} onChange={(e)=>setInput((prev) => ({...prev , repassword:e.target.value}))} placeholder="Repeat your password" type="password" className="rounded-xl p-4" ></input>
                </label>
                <Button title="Sign Up" onClick={handleSignUp}>Sign Up</Button>
            </form>

        </div>
    )
}