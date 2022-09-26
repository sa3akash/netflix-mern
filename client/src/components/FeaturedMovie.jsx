import React from 'react';
import "./styles/FeaturedMovie.scss";
import {MdPlayArrow, MdInfoOutline} from "react-icons/md"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

const FeaturedMovie = ({type, setGenre}) => {
    const [randomMovie, setRandomMovie] = useState({})


    useEffect(()=>{
        const fetchRandom = async () => {
            try{
                const res = await axios.get(`/random?type=${type}`)
                setRandomMovie(res.data[0]);
            }catch(err){
                console.log(err)
            }
        }
        fetchRandom();
    },[type])

  return (
    <div className='featured'>
      <img src={randomMovie?.image} alt="movie" className='bImage'/>
            <div className="container">
                {
                type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movie" : "Series"}</span>
                        <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
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
                    )
                }
            <div className="info">
                <h2>{randomMovie?.name}</h2>
                <div className="desc">
                    {randomMovie?.desc?.length > 250 ?
                    `${randomMovie?.desc?.substring(0, 250)}...` : randomMovie?.desc
                    }
                </div>
                <div className="buttons">
                    <Link to="/watch" state={{movie: randomMovie}}><button><MdPlayArrow/> Play</button></Link>
                    <button><MdInfoOutline /> More</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default FeaturedMovie;