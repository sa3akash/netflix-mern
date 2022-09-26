import React, { useRef } from 'react';
import "./styles/List.scss";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import ListItem from './ListItem';
import { useState } from 'react';

const List = ({list}) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [clickLimit, setClickLimit] = useState(Math.floor(window.innerWidth / 230))

  const containerRef = useRef()
  const handleArrow = (direction) => {
    // get distance in container
    const distance = containerRef.current.getBoundingClientRect().x - 50

    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1);
      containerRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    // array length - display show movie items
    if(direction === "right" && slideNumber < 10 - clickLimit){
      setSlideNumber(slideNumber + 1);
      containerRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className='list'>
        <h3 className="listTitle">{list.title}</h3>
        <div className="wrapper">
            <MdKeyboardArrowLeft className='sliderArrow left' style={{display: slideNumber === 0 ? "none" : "block"}} onClick={()=> handleArrow("left")}/>
            <div className="container" ref={containerRef}>
              {
                list.content.map((item, index)=>(
                    <ListItem index={index} key={index} item={item}/>
                ))
              } 
            </div>
            <MdKeyboardArrowRight className='sliderArrow right' style={{display: slideNumber === 10 - clickLimit ? "none" : "block"}} onClick={()=> handleArrow("right")}/>
        </div>
    </div>
  )
}

export default List