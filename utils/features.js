import Jwt from "jsonwebtoken";

export const setcookie=(res,isuser,statusCode,message)=>{
    // const token=isuser._id;
    const token=Jwt.sign({id:isuser._id},process.env.JWT_SECRET);
    // console.log(token)
    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        samesite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true
    }).json({
        success:true,
        message:message
    })
}