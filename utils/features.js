import Jwt from "jsonwebtoken";

export const setcookie = (res, isuser, statusCode, message) => {
    try {
        const token = Jwt.sign({ id: isuser._id }, process.env.JWT_SECRET);
        // console.log(token)
        res.status(statusCode).cookie("token", token, {
            httpOnly: true,
            // samesite:process.env.NODE_ENV==="development"?"lax":"none",
            // secure:process.env.NODE_ENV==="development"?false:true,

        }).json({
            success: true,
            message: message
        })
    } catch (error) {
        next(error)
    }

}