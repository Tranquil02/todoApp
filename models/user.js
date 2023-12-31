import mongoose from "mongoose"

const Userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
        length:8,
    }
})
export const user=mongoose.model("user",Userschema)
