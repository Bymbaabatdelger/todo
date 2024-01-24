"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Page = () => {

    const router = useRouter()

  useEffect(() => {
    const rawJson : string | null = localStorage.getItem("user");
    const user = rawJson && JSON.parse(rawJson)

    if(!user){
        router.push("/login");
        return;
    }

    const { _id , username , password} = user

    if(!_id || !username || !password){
        router.push("/login")
        return;
    }

  }, [])


   return <div>This is dashboard</div>
};

export default Page;