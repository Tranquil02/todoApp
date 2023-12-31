class Errorhandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}

export const ErrorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error";
    err.statusCode=err.statusCode || 505;
    
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

export default Errorhandler