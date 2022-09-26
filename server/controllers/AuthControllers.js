import User from "../models/User.js";
import {createError} from "../middlewares/customErrorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const AuthControllers = {
    // User register ==================================///////
    async register(req, res, next){
        // if username and already in database
        try{
            const existingUsername = await User.findOne({username: req.body.username});
            if(existingUsername) return next(createError(403, "Username already taken."))
            // email chack
            const existing = await User.findOne({email: req.body.email});
            if(existing) return next(createError(403, "User already exists."))
        }catch(err){
            return next(err);
        }
        // hash password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        // buld user for save in database
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        })
        // save user in database and response user
        try{
            const registerdUser = await newUser.save();
            const {password, ...others} = registerdUser._doc;
            return res.status(200).json(others);
        }catch(err){
            return next(err)
        }
    },


    // User Login ==================================///////
    async login(req, res, next){
        // check if don't user in database
        try{
            const existing = await User.findOne({email: req.body.email});
            if(!existing) return next(createError(403, "Wrong login credentials"));
            // distacture user
            const {password, ...other} = existing._doc;
            // conpare password
            const comparePassword = bcrypt.compareSync(req.body.password, password);
            if(!comparePassword) return next(createError(403, "Wrong login credentials"));
            //accessToken genarate with jwt
            const accessToken = jwt.sign(
                {id: existing._id, isAdmin: existing.isAdmin},
                process.env.JWT_TOKEN_KEY,
                {expiresIn: '5d'}
                )

            // if all is valid
            return res.cookie("accessToken",accessToken,{httpOnly: true}).status(200).json(other);
        }catch(err){
            return next(err);
        }
    },

    // User logout ==================================///////
    async logout(req, res, next){
        // check if don't user in database
        try{
            res.clearCookie('accessToken')
    
            res.status(200).json({user: null})
        }catch(err){
            return next(err);
        }
    },
}

export default AuthControllers;