import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateMovieMovieById } from '../context/api/ApiCalls';
import { MovieContext } from '../context/MovieContext';
import "./style/Movie.css";

const Movie = () => {
    const {state} = useLocation()
    const movie = state.movie;
    const [updateMovie, setUpdateMovie] = useState(movie)

    const {isFetching, dispatch} = useContext(MovieContext)
    const navigate= useNavigate()


    // handleChangeInput
  const handleChangeInput = (e) => {
    setUpdateMovie(prev=>({...prev, [e.target.name]: e.target.value}))
  }

// submit movie in db
    const handleSubmit = (e) => {
    e.preventDefault();
    updateMovieMovieById(movie._id,updateMovie,dispatch)
    navigate("/movies")
    }



  return (
    <div className='movie'>
        <div className="movieTitleContainer">
            <h3>Edit Movie</h3>
            <Link to="/movies/create">
                <button>Add Movie</button>
            </Link>
        </div>
        <div className="movieTop">
            <div className="movieTopRight">
                <div className="movieInfoTop">
                    <img src={movie.image} alt="" />
                    <span>{movie.name}</span>
                </div>
                <div className="movieInfoBottom">
                    <div className="productInfoItem">
                        <span>id:</span>
                        <span>{movie._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span>Genre:</span>
                        <span>{movie.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span>Year:</span>
                        <span>{movie.year}</span>
                    </div>
                    <div className="productInfoItem">
                        <span>Age Limit:</span>
                        <span>{movie.ageLimit}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="movieBottom">
            <div className="movieEditTitle">Edit Movie</div>
    <form className="movieEditContainer">
        <div className="addProductItem">
            <label>Movie Name</label>
            <input type="text" placeholder="Love Story" name="name" value={updateMovie.name} onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
            <label>Movie Description</label>
            <textarea placeholder="Description" name="desc" value={updateMovie.desc} onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
            <label>Year</label>
            <input type="text" placeholder="2022" name="year" value={updateMovie.year} onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
            <label>Genre</label>
            <select name="genre" id="genre" onChange={handleChangeInput} value={updateMovie.genre}>
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
            <label>Age Limit</label>
            <input type="text" placeholder="18" name="ageLimit" value={updateMovie.ageLimit} onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
            <label>Duration</label>
            <input type="text" placeholder="140minits" name="duration" value={updateMovie.duration} onChange={handleChangeInput}/>
        </div>
            
        <div className="addProductItem">
            <label>Is Series?</label>
            <select name="isSeries" id="isSeries" value={updateMovie.isSeries} onChange={handleChangeInput}>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
        </div>

        <button className="addProductButton" onClick={handleSubmit} disabled={isFetching}>Update</button>

    </form>
        </div>
    </div>
  )
}

export default Movie

/// 3 31 000