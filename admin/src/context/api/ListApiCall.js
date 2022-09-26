import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFalure, deleteListStart, deleteListSuccess, getListsFalure, getListsStart, getListsSuccess, updateListFailure, updateListStart, updateListSuccess } from "../actions/ListAction";




//////////// Movie

export const getAllLists = async (dispatch) =>{
    dispatch(getListsStart())
    try{
        const res = await axios.get("/lists")
        dispatch(getListsSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(getListsFalure())
    }
}


// /// delete movie by id


export const deleteListsById = async (id,dispatch) =>{
    dispatch(deleteListStart())
    try{
        await axios.delete(`/list/${id}`)
        dispatch(deleteListSuccess(id))
    }catch(err){
        console.log(err)
        dispatch(deleteListFalure())
    }
}

// /// create a movie by id


export const createLists = async (list,dispatch) =>{

    dispatch(createListStart())
    try{
        const res = await axios.post("/list/create",list)
        dispatch(createListSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(createListFailure())
    }
}


/// update a movie by id


export const updateListById = async (id,list,dispatch) =>{

    dispatch(updateListStart())
    try{
        const res = await axios.put(`/list/${id}`,list)
        dispatch(updateListSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(updateListFailure())
    }
}