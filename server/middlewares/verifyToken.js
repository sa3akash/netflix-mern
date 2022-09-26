import jwt from "jsonwebtoken";
import { createError } from "./customErrorHandler.js";

export const verifyUser = (req, res, next) => {
    const {accessToken} = req.cookies;
    if(!accessToken) return next(createError(401, "Your are not authenticated"))

    jwt.verify(accessToken, process.env.JWT_TOKEN_KEY, (err, user) => {
        if(err) return next(createError(401, "Invalid access token"))
        // set user information in req object
        req.user = user;
        next()
    }) 
}


export const verifyAdmin = (req, res, next) => {
    const {accessToken} = req.cookies;
    if(!accessToken) return next(createError(401, "Your are not authenticated"))

    jwt.verify(accessToken, process.env.JWT_TOKEN_KEY, (err, user) => {
        if(err) return next(createError(401, "Invalid access token"))
        // check if user are admin or not
        if(!user.isAdmin) return next(createError(403, "Your not an admin"))
        // set user information in req object
        req.user = user;
        next()
    }) 
    
}