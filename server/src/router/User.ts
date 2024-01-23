import express from "express"
import { logIn, signUp } from "../controller/User";

const auth = express.Router();

auth.route("/signup").post(signUp)
auth.route("/login").post(logIn)

export {auth}
