import express from "express"
import { connetDatabase } from "./utils/database";

const start = () =>{
    const app = express();

    connetDatabase();

    const PORT = 8000;

    app.get ("/" , (req , res ) => {
        res.status(200).send({success:true , msg : "Hello World"})
    })
     
    app.listen(PORT, () => {
        console.log("app running successfully");
        
    });
}
start();

