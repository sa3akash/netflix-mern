import React, { useContext, useState } from 'react';
import "./styles/Navbar.scss";
import {MdSearch, MdNotifications, MdArrowDropDown} from "react-icons/md";
import {Link} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { logoutCall } from '../context/api/ApiCalls';


const Navbar = () => {
    const [showProfileButton, setShowProfileButton] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const {user, dispatch} = useContext(AuthContext)

   window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => window.onscroll = null;
   }


   const handleLogout = (e) => {
        e.preventDefault();
        logoutCall(dispatch)
   }



  return (
    <div className={isScrolled ? "navbar backgorundScrolled": "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/"><img src="./images/logo.png" alt="logo" /></Link>
                <Link to="/"><span>Home</span></Link>
                <Link to="/series"><span className='importantLink'>Series</span></Link>
                <Link to="/movies"><span className='importantLink'>Movies</span></Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <MdSearch/>
                <span className='rightKid'>KID</span>
                <MdNotifications />
                <div className="profile" onClick={()=> setShowProfileButton(!showProfileButton)}>
                    <img src={user.profilePic} alt="profile" />
                    <MdArrowDropDown className='importantSvg'/>
                    {
                        showProfileButton && (
                            <div className="profileButton">
                                <span>Profile</span>
                                <span>Settings</span>
                                <span onClick={handleLogout}>Logout</span>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;