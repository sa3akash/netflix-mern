import User from "../models/User.js";
import {createError} from "../middlewares/customErrorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const UserControllers = {
    //UPDATE USER======================////
    async updateUser(req, res, next){
        
        if(req.user.id === req.params.id || req.user.isAdmin){

            if(req.body.password){
                const salt = bcrypt.genSaltSync(10)
                req.body.password = bcrypt.hashSync(req.body.password, salt);
            }

            try{

                const updateUser = await User.findByIdAndUpdate(req.params.id,
                    {$set: req.body},{new: true}
                )
                //accessToken genarate with jwt
                const accessToken = jwt.sign(
                    {id: updateUser._id, isAdmin: updateUser.isAdmin},
                    process.env.JWT_TOKEN_KEY,
                    {expiresIn: '5d'}
                    )

                const {password, ...other} = updateUser._doc;
                return res.cookie("accessToken",accessToken,{httpOnly: true}).status(201).json(other);

            }catch(err){
                return next(err);
            }

        }else{
            return next(createError(403, "You can't update this user"))
        }
    },

    //DELETE USER======================////
    async deleteUser(req, res, next){
        if(req.user.id === req.params.id || req.user.isAdmin){

            try{
                await User.findByIdAndDelete(req.params.id)
                
                return res.status(201).json({success: true, message: "User deleted successfully."});
            }catch(err){
                return next(err);
            }

        }else{
            return next(createError(403, "You can't delete this user"))
        }
    },


    //GET ONE USER======================////
    async getOneUser(req, res, next){
        if(req.user.id === req.params.id || req.user.isAdmin){

            try{
                const user = await User.findById(req.params.id).select("-password -isAdmin")
                
                return res.status(200).json(user);
            }catch(err){
                return next(err);
            }

        }else{
            return next(createError(403, "You can't delete this user"))
        }
    },

    //GET ALL USER======================////
    async getAllUser(req, res, next){
        const query = req.query.new;
        if(req.user.isAdmin){
            try{
                const users = query ? await User.find().sort({_id:-1}).limit(10).select("-password")
                 :
                await User.find().select("-password")
                
                return res.status(200).json(users);
            }catch(err){
                return next(err);
            }

        }else{
            return next(createError(403, "You are not an admin"))
        }
    },


    //USER STATE======================////
    async getStats (req, res, next) {

        try{
            const data = await User.aggregate([
                {
                    $project:{
                        month: {$month: "$createdAt"}
                    }
                },
                {
                    $group: {
                        _id: "$month",
                        total: {$sum:1}
                    }
                }
            ])
            return res.status(200).json(data)
        }catch(err){
            return next(err);
        }

    }
}

export default UserControllers;

