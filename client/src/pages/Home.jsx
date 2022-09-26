import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeaturedMovie from '../components/FeaturedMovie';
import List from '../components/List';
import Navbar from '../components/Navbar';
import "./styles/Home.scss";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(()=>{
    const fetchList = async () => {
        try{
          const res = await axios.get(`/lists${type ? "?type="+ type : ""}${ genre ? "&genre=" + genre : ""}`);
          setLists(res.data)
        }catch(err){
          console.log(err);
        }     
    }
    fetchList();
  },[type,genre])
  
  return (
    <div className='home'>
      <Navbar />
      <FeaturedMovie type={type} setGenre={setGenre}/>
      {
        lists?.map(list => (
          <List key={list._id} list={list}/>
        ))
      }
      
    </div>
  )
}

export default Home;