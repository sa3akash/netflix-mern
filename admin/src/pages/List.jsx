import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getMoviesCall } from '../context/api/ApiCalls';
import { updateListById } from '../context/api/ListApiCall';
import { MovieContext } from '../context/MovieContext';
import "./style/Movie.css";

const Movie = () => {
    const {state} = useLocation()
    const list = state.list;
    const [updateList, setUpdateList] = useState(list)

    const {isFetching, dispatch} = useContext(MovieContext)
    const navigate= useNavigate()


    const {movies, dispatch:disaction} = useContext(MovieContext)

  useEffect(()=>{
    getMoviesCall(disaction)
  },[disaction])

  

    // handleChangeInput
  const handleChangeInput = (e) => {
    setUpdateList(prev=>({...prev, [e.target.name]: e.target.value}))
  }


    // handleChangeInput
    const handleSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, (option) => option.value)
        setUpdateList(prev=>({...prev, [e.target.name]: value}))
      }

// submit movie in db
    const handleSubmit = (e) => {
    e.preventDefault();
    updateListById(list._id,updateList,dispatch)
    navigate("/lists")
    console.log(updateList)
    }



  return (
    <div className='movie'>
        <div className="movieTitleContainer">
            <h3>Edit List</h3>
            <Link to="/list/create">
                <button>Add List</button>
            </Link>
        </div>
        <div className="movieTop">
            <div className="movieTopRight">
                <div className="movieInfoBottom">
                    <div className="productInfoItem">
                        <span>Title:</span>
                        <span>{list.title}</span>
                    </div>
                    <div className="productInfoItem">
                        <span>Type:</span>
                        <span>{list.type}</span>
                    </div>
                    <div className="productInfoItem">
                        <span>Genre:</span>
                        <span>{list.genre}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="movieBottom">
            <div className="movieEditTitle">Edit List</div>
    <form className="movieEditContainer">
    <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Best Action Movie" value={updateList.title} name="title" onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" value={updateList.type} onChange={handleChangeInput}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <select name="genre" id="genre" value={updateList.genre} onChange={handleChangeInput}>
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
          <select name="content" id="content" value={updateList.content} multiple onChange={handleSelect}>
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
    </div>
  )
}

export default Movie

/// 3 31 000