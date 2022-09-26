import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import "./style/CreateLists.css";
import { createLists } from '../context/api/ListApiCall';
import {ListsContext} from "../context/ListContext";
import {MovieContext} from "../context/MovieContext";
import {useNavigate} from "react-router-dom"
import { getMoviesCall } from '../context/api/ApiCalls';


const CreateLists = () => {

  const [addList, setAddList] = useState(null)


  const navigate= useNavigate()

  const {isFetching,dispatch} = useContext(ListsContext)

  const {movies, dispatch:disaction} = useContext(MovieContext)

  useEffect(()=>{
    getMoviesCall(disaction)
  },[disaction])


  // handleChangeInput
  const handleChangeInput = (e) => {
    setAddList(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  // handleChangeInput
  const handleSelect = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value)
    setAddList(prev=>({...prev, [e.target.name]: value}))
  }



// submit movie in db
  const handleSubmit = (e) => {
    e.preventDefault();
    createLists(addList, dispatch)
    navigate("/lists")
  }


  return (
    <div className='createMovie'>
      <h1 className="addProductTitle">Add New List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Best Action Movie" name="title" onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChangeInput}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <select name="genre" id="genre" >
              <option>Genre</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
          </select>
        </div>
        
        <div className="addProductItem">
          <label>Content</label>
          <select name="content" id="content" multiple onChange={handleSelect}>
            {
              movies.map(movie=>(
                <option value={movie._id} key={movie._id}>{movie.name}</option>
              ))
            }
          </select>
        </div>
       <button className="addProductButton create" onClick={handleSubmit} disabled={isFetching}>Create</button>

      </form>
    </div>
  )
}

export default CreateLists