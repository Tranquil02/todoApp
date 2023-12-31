import { user } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthorised = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(404).json({
            success: false,
            message: "Login First",
        })
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("decoded :",decodeToken)
        req.User = await user.findById(decodeToken.id);
        // console.log(req.User)
        next();
    } catch (error) {
        next(error)
    }

}