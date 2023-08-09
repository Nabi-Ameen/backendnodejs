import express from "express";
const route=express.Router()
import {postUsers} from "../controllers/UserController.js"

route.post("/user",postUsers)

export default route