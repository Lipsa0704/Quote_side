import React from 'react'
import './CSS/Login.css';

import images from '../assets/Assets';

import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="login-container">
              
             <img src={images.logo} />

<div className='login_form'>
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" onClick={()=>{navigate('/homepage')}}>Login</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default Login;