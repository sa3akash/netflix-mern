import React, { useContext, useState } from 'react';
import "./styles/Register.scss";
import {Link, useNavigate} from "react-router-dom";
import { createUser } from '../context/api/ApiCalls';
import {AuthContext} from "../context/AuthContext"

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    })

    const {isFetching,dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleInput = (e) => {
        setInputValue(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const hangleSubmit = () => {
        if(!inputValue.email || !inputValue.password) return;

        createUser(inputValue, dispatch)
        navigate("/")
    }

  return (
    <div className='register'>
        <div className="top">
            <img src="./images/logo.png" alt="" />
            <Link to="/login">Sign in</Link>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="inputs">
                <input type="email" name="email" placeholder='Enter your email' onChange={handleInput}/>
                {
                    showPass && (
                        <input type="password" name="password" placeholder='Enter your password' onChange={handleInput}/>
                    )
                }
                {
                    !showPass && (
                        <button onClick={()=> setShowPass(true)}>Get Started</button>
                    )
                }
                
            </div>
            <button onClick={hangleSubmit} disabled={isFetching}>Sign up</button>
        </div>
    </div>
  )
}

export default Register