import mongoose from "mongoose"

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    userid:{
        type:mongoose.Types.ObjectId
    }
})
export const task=mongoose.model("Task",TaskSchema)
