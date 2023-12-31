import express from "express";
import {myDetails, loginUser, registerUser, logout } from "../controllers/user.js";
import { isAuthorised } from "../middlewares/auth.js";

const UserRouter=express.Router();

UserRouter.post("/new",registerUser)
UserRouter.post("/login",loginUser)
UserRouter.get("/logout",isAuthorised,logout)

UserRouter.get("/me",isAuthorised,myDetails)

export default UserRouter;