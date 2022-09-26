import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logoutStart } from "../actions/AuthAction";
import { getMoviesStart,getMoviesSuccess,getMoviesFalure, deleteMovieStart, deleteMovieFalure, deleteMovieSuccess, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure } from "../actions/MovieAction";


// Auth
export const loginCall = async (user,dispatch) =>{
    dispatch(loginStart())
    try{
        const res = await axios.post("/auth/login", user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    }catch(err){
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




//////////// Movie

export const getMoviesCall = async (dispatch) =>{
    dispatch(getMoviesStart())
    try{
        const res = await axios.get("/movies")
        dispatch(getMoviesSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(getMoviesFalure())
    }
}

/// delete movie by id


export const deleteMoviesCallById = async (id,dispatch) =>{
    dispatch(deleteMovieStart())
    try{
        await axios.delete(`/movie/${id}`)
        dispatch(deleteMovieSuccess(id))
    }catch(err){
        console.log(err)
        dispatch(deleteMovieFalure())
    }
}

/// create a movie by id


export const createMovie = async (movie,dispatch) =>{

    dispatch(createMovieStart())
    try{
        const res = await axios.post("/movie/create",movie)
        dispatch(createMovieSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(createMovieFailure())
    }
}
/// update a movie by id


export const updateMovieMovieById = async (id,movie,dispatch) =>{

    dispatch(updateMovieStart())
    try{
        const res = await axios.put(`/movie/${id}`,movie)
        dispatch(updateMovieSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(updateMovieFailure())
    }
}