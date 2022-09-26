import React from 'react';
import "./styles/ListItem.scss";
import {MdPlayArrow, MdAdd, MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ListItem = ({index,item}) => {
  const [hoverMovie, setHoverMovie] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(()=>{
    const fetchMovie = async ()=>{
      try{
        const res = await axios.get(`/movie/${item}`)
        setMovie(res?.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchMovie()
  },[item])

  return (
    <Link to='/watch' state={{movie: movie}}>
    <div className='listItem' onMouseEnter={()=> setHoverMovie(true)}
    onMouseLeave={()=> setHoverMovie (false)}
    style={{left: hoverMovie && (index * 225)- 50 + (index * 2.5)}}
    >

      {
        !hoverMovie && (
          <img src={movie?.image} alt="movie" className='imageVideo' />
        )
      }

      {
        hoverMovie && (
          <>
            <video src={movie?.trailer ? movie.trailer : "./video/trailer.mp4"} loop autoPlay muted className='imageVideo' />
          <div className="itemInfo">
            <div className="icons">
                <MdPlayArrow />
                <MdAdd />
                <MdThumbUpOffAlt />
                <MdThumbDownOffAlt />
            </div>
            <div className="itemTop">
              <span>{movie?.duration} Minites</span>
              <span className='ageLimit'>+{movie?.ageLimit}</span>
              <span>{movie?.year}</span>
            </div>
            <p className="desc">
              {
                movie?.desc ? (
                  movie?.desc.length > 140 ? `${movie.desc.substring(0, 140)}...` : item.description
                ) 
                : 
              ("")
              }
    
            </p>
            <span className="genre">{movie?.genre}</span>
          </div>
          </>
        )
      }
    </div>
    </Link>
  )
}

export default ListItem
