import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logoutStart, registerFailure, registerStart, registerSuccess } from "../actions/AuthAction";


// Auth
export const loginCall = async (user,dispatch) =>{
    dispatch(loginStart())
    try{
        const res = await axios.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(loginFailure())
    }
}

export const logoutCall = async (dispatch) =>{
    dispatch(loginStart())
    try{
       await axios.post("/auth/logout")
        dispatch(logoutStart())
    }catch(err){
        console.log(err)
        dispatch(loginFailure())
    }
}






export const createUser = async (user,dispatch) =>{

    dispatch(registerStart())
    try{
        const res = await axios.post("/auth/register",user)
        dispatch(registerSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(registerFailure())
    }
}
/// update a movie by id
