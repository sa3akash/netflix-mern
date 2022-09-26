import React, { useState } from 'react';
import "./styles/Login.scss";
import { Link } from 'react-router-dom';
import {loginCall} from "../context/api/ApiCalls";
import { useContext } from 'react';
import {AuthContext} from "../context/AuthContext"
 
const Login = () => {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    })

    const {dispatch} = useContext(AuthContext)

    const handleInput = (e) => {
        setInputValue(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    const hangleSubmit = (e) => {
        e.preventDefault()
        if(!inputValue.email || !inputValue.password) return;
        loginCall(inputValue, dispatch)
    }

  return (
    <div className='login'>
        <div className="top">
            <img src="./images/logo.png" alt="" />
            <Link to="/register">Sign up</Link>
        </div>
        <div className="container">
            <form>
                <h2>Sign In</h2>
                <input type="email" name='email' onChange={handleInput} placeholder='Enter your Email'/>
                <input type="password" name='password' onChange={handleInput} placeholder='Password'/>

                <button type='submit' onClick={hangleSubmit}>Login</button>
                
                <span>New to Netflix? <b><Link to="/register">Sign up</Link></b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot. <b>Learn more</b>.
                 </small>
            </form>
        </div>
    </div>
  )
}

export default Login