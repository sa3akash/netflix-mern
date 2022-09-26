import React, { useEffect, useMemo, useState } from 'react';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import "./style/Home.css";
import axios from "axios";

const Home = () => {

  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )
  
  
    useEffect(()=>{
      
      const getStats = async () => {
        try{
          const res = await axios.get("/users/stats")
          // set user stats with monght name
          res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
        }catch(err){
          console.log(err)
        }
      }
      getStats();
    },[MONTHS])

  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid={true} dataKey="New User"/>
        <div className="homeWidget">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home