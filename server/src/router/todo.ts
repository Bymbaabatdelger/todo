import  express  from "express"
import { checkToken } from "../middleware/auth"
import { createTodo, getAllTodo, getAllTodoByUserId, getOneTodo } from "../controller/Todo"


const todo = express.Router()

todo.route("/").get(checkToken , getAllTodo).post(createTodo);
todo.route("/:id").get(getOneTodo);
todo.route("/user/:id").get(getAllTodoByUserId)

export {todo}