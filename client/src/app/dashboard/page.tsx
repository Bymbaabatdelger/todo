"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios";
import { SizeEnum, Title } from "../components/Title";
import Board from "../components/Board";
import Modal from "../components/Modal";

const Page = () => {

    const router = useRouter()
    const[ todo , setTodo] = useState()

    const fetchTodos = async (token : string) => {
      const res = await axios.get("http://localhost:8000/todo" , {
        headers: {
          token,
        },
      });
      setTodo(res.data.todos)
      console.log(res);
      
    }

  useEffect(() => {
    const rawJson : string | null = localStorage.getItem("token");
    const token= rawJson && JSON.parse(rawJson)

    

    if(!token){
        router.push("/login");
        return;
    }

    fetchTodos(token)

    // const { _id , username , password} = user

    // if(!_id || !username || !password){
    //     router.push("/login")
    //     return;
    // }

  }, [])

  const [modal , setModal ] = useState(true)

  const toggleModal = () => {
    setModal(!modal)
    console.log(modal);
    
  }


  
   return (
    <div>
    <Title size={SizeEnum.L}>Dashboard</Title>
    <Board onclick={toggleModal}></Board>
    {/* <div>{JSON.stringify(todo, null, 2)}</div> */}

    {modal && <Modal onClick={toggleModal} />}
   
  </div>
   )
};

export default Page;