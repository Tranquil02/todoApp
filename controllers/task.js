import Errorhandler from "../middlewares/error.js";
import { task } from "../models/task.js";

export const newTask = async (req, res, next) => {
    try {
        const userid = req.User._id;
        const { title, description } = req.body;
        await task.create({
            title, description, userid
        })
        res.status(201).json({
            success: true,
            message: "New Task Added"
        })
    } catch (error) {
        next(error)
    }

}

export const showallTask = async (req, res, next) => {
    try {
        const userid = req.User._id;
        const mytask = await task.find({ userid })
        if (mytask.length == 0) return next(new Errorhandler("NO TASK", 200))

        res.json({
            success: true,
            mytask
        })
    } catch (error) {
        next(error)
    }

}

export const updateTask = async (req, res, next) => {
    try {
        const myTask = await task.findById(req.params.id);

        if (!myTask) return next(new Errorhandler("Invalid ID", 404))

        myTask.isCompleted = !myTask.isCompleted;
        await task.findByIdAndUpdate(req.params.id, { isCompleted: myTask.isCompleted })
        res.json({
            success: true,
            message: "Task Updated"
        })
    } catch (error) {
        next(error)
    }

}
export const deleteTask = async (req, res, next) => {
    try {
        const myTask = await task.findById(req.params.id);

        if (!myTask) return next(new Errorhandler("Invalid ID", 404))
        await task.deleteOne({_id:req.params.id});
        res.json({
            success: true,
            message: "Task Deleted"
        })
    } catch (error) {
        next(error)
    }
}