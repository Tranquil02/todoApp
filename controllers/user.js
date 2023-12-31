import Errorhandler from "../middlewares/error.js";
import { user } from "../models/user.js"
import { setcookie } from "../utils/features.js";
import bcrypt from "bcryptjs";

export const myDetails = (req, res) => {
    res.json({
        success: true,
        details:req.User,
    })
}

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let isUser = await user.findOne({ email });
        if (!isUser) return next(new Errorhandler("Invalid User or Password", 404))
        const ismatch = bcrypt.compare(password, isUser.password);
        if (!ismatch) return next(new Errorhandler("Wrong Password", 404))
        setcookie(res, isUser, 200, "login Successfully")
    } catch (error) {
        next(error)
    }
}
export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);

        let isuser = await user.findOne({ email });
        if (isuser) return next(new Errorhandler("User ALready Exist", 404))
        
        isuser = await user.create({
            name,
            email,
            password: hashed,
        })
        setcookie(res, isuser, 201, "Registered Successfully")
    } catch (error) {
        next(error)
    }
}
export const logout = (req, res, next) => {
    try {
        res
            .status(200)
            .cookie("token", "", {
                expires: new Date(Date.now()),
                sameSite: process.env.NODE_ENV === "developmen" ? "lax" : "none",
                secure: process.env.NODE_ENV === "developmen" ? false : true
            })
            .json({
                success: true,
                message: "Logout Successfull"
            })
    } catch (error) {
        next(error)
    }

}