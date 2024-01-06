import express from "express";
import { isAuthorised } from "../middlewares/auth.js";
import { deleteTask, newTask, showallTask, updateTask } from "../controllers/task.js";

const TaskRouter=express.Router();

TaskRouter.post("/new",isAuthorised,newTask)
TaskRouter.get("/all",isAuthorised,showallTask)
TaskRouter.put("/:id",isAuthorised,updateTask)
// TaskRouter.delete("/:id",isAuthorised,deleteTask)
TaskRouter.delete("/:id",deleteTask)
// TaskRouter.route("/:id").put(isAuthorised,updateTask).delete(isAuthorised,deleteTask);

export default TaskRouter;