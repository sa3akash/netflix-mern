import React, { useContext } from 'react';
import "./style/Topbar.css";
import {NotificationsNone, Language, Settings} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
import { useState } from 'react';
import { logoutCall } from '../context/api/ApiCalls';


const Topbar = () => {
    const [openLogout, setOpenLogout] = useState(false)
const {user, isFetching, dispatch} = useContext(AuthContext)

    const handleLogout = (e) => {
        e.preventDefault()
        logoutCall(dispatch)
        setOpenLogout(false)
    }
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <Link to="/"><span className="logo">Admin</span></Link>
            </div>
            {
                user && (
                    <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNone />
                        <span className='badge'>2</span>
                    </div>
                    <div className="topbarIcons">
                        <Language />
                        <span className='language'>EN</span>
                    </div>
                    <div className="topbarIcons">
                        <Settings />
                    </div>
                    
                    <div className='avater'>
                        <img src={user.profilePic} alt="avater" onClick={()=> setOpenLogout(!openLogout)}/>
                        {openLogout && (
                            <button className='logout' onClick={handleLogout} disabled={isFetching}>Logout</button>
                            )}
                    </div>
                    
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Topbar