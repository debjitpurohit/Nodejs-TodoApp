import jwt from "jsonwebtoken"

export const sendCookie = (userdetail , res , message , statuscode=200)=>{
    const token = jwt.sign({_id : userdetail._id} , process.env.JWT_SECRET);
    res.status(statuscode).cookie("token" ,token , {
        httpOnly : true , 
        maxAge : 15*60*1000 ,
        //for deploying none and true but in case of postman samesite must be lax and secure must be false 
        samesite:process.env.NODE_ENV==="Development"?"lax":"none",//if we give strict mode . cors er credentials e true pass korleu cookie send hobe na frontend e
        secure : process.env.NODE_ENV==="Development"?false :true, 

    }).json({
        success: true,
        message 
    })
}