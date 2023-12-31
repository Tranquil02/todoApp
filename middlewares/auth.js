import { user } from "../models/user.js";

export const isAuthorised=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token) return res.status(404).json({
        success:false,
        message:"Login First",
    })
    req.User=await user.findById(token);
    next();
}