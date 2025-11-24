import React, { useState } from 'react';
import './CSS/Navbar.css';
import images from '../assets/Assets';

import { FaRegHeart } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={images.logo} alt="Logo" onClick={()=>navigate('/homepage')} />
      </div>


      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className='heart'><FaRegHeart size={30} onClick={() => navigate('/favourite')} /></div>
        <div className="about">
          <Link to ="/aboutus">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
