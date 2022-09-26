import React, { useState } from 'react';
import "./style/WidgetSm.css";
import {Visibility} from "@mui/icons-material";
import axios from "axios";
import { useEffect } from 'react';

const WidgetSm = () => {
    const [newUser, setNewUser] = useState([])

    useEffect(()=>{
        const getNewUser = async () =>{
            try{
                const res = await axios.get("/users?new=true")
                setNewUser(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getNewUser()
    },[])
  return (
    <div className='wSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">

        {
            newUser.map(user=>(
                <li className="widgetLgItem" key={user._id}>
                    <div className="widgetSmUser">
                        <img src={user?.profilePic} alt="avater" />
                        <div className="widgetUserSpan">
                            <span>{user?.email}</span>
                        </div>
                    </div>
                    <button className="widgetSmActionButton">
                        <Visibility/>
                        <span>Display</span>
                    </button>
                </li>
            ))
        }

            
            
        </ul>
    </div>
  )
}

export default WidgetSm;