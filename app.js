import express from "express";
import {config} from "dotenv";
import UserRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import TaskRouter from "./routes/task.js"
import {ErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app=express();
config({
    path:"./data/config.env"
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials
    next();
  });

// Using MiddleWare
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["GET","POST","PUT","DELETE"]
}))
// app.use(isAuthorised())
app.use("/api/v1/user",UserRouter);
app.use("/api/v1/task",TaskRouter);
app.get("/",(req,res)=>{
    res.send("home Working")
})

app.use(ErrorMiddleware)


