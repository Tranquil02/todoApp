import express from "express";
import { isAuthorised } from "../middlewares/auth.js";
import { deleteTask, newTask, showallTask, updateTask } from "../controllers/task.js";

const TaskRouter=express.Router();

TaskRouter.post("/new",isAuthorised,newTask)
TaskRouter.get("/all",isAuthorised,showallTask)
// TaskRouter.get("/:id",isAuthorised,updateTask)
TaskRouter.route("/:id").put(isAuthorised,updateTask).delete(isAuthorised,deleteTask);

// router.get("/me",isAuthorised,myDetails)

export default TaskRouter;