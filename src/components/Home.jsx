import React from 'react'
import images from "../assets/Assets";
import './CSS/Home.css';

import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate();
  return (
    <>
    <div className='welcome'>
       <img src={images.logo} />
       
        <h1>WELCOME TO QUOTESIDE</h1>
       <button onClick={() => navigate("/login")}>Login</button>
        <h3>OR</h3> 
       <button onClick={() => navigate("/signup")}>SignUp</button> 
        <h3>TO ACCESS QUOTES</h3>
    </div>
    </>
  )
}

export default Home