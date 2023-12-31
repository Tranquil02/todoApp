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

app.use(ErrorMiddleware)


