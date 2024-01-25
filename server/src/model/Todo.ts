import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    status : {
        type: String,
        enum : [" To Do" , "In Progress" , "Completed"]
    },
    title : String,
    description : String,
    priority : {
        type: String,
        enum : ["High" , "Medium " , "Low"]
    },
    label :String,
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
});

const TodoModel = mongoose.model("todo" , TodoSchema)

export {TodoModel}