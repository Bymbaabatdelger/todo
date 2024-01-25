import express from "express"
import cors from "cors"
import { connetDatabase } from "./utils/database";
import { auth } from "./router/User";
import { todo } from "./router/todo";


const start = () =>{
    const app = express();
    app.use(express.json())
    app.use(cors())

    connetDatabase();

    app.use("/auth" , auth )
    app.use("/todo" , todo)

    app.get("/" , (req, res) => {
        res.status(200).send({success:true})
    })

    const PORT = 8000;

    app.get ("/" , (req , res ) => {
        res.status(200).send({success:true , msg : "Hello World"})
    })
     
    app.listen(PORT, () => {
        console.log("app running successfully");
        
    });

}
start();

