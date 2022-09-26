import React from 'react';
import "./styles/Watch.scss";
import {MdOutlineArrowBack} from "react-icons/md";
import {useLocation, useNavigate} from "react-router-dom";

const Watch = () => {
  const navigate = useNavigate();
  const {state} = useLocation()
  const movie = state.movie;
  return (
    <div className='watchWapper'>
      <div className='watch'>
        <div className="back" onClick={()=>navigate(-1)}><MdOutlineArrowBack/> Back</div>
        <video src={movie?.video} loop autoPlay controls />
    </div>
    </div>
  )
}

export default Watch;