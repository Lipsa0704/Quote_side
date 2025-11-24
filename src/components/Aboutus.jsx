import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import { FaRegFaceSmile } from "react-icons/fa6";
import { GiButterflyFlower } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';

import './CSS/Abou.css'


const Aboutus = () => {

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className='abouttext'>
        <p>
          Hii , This is us......
          <br/>
          Happy to let you know about us.....
          <br/>
          Hope this website help you find your desired thing and hope you find it good.....
          <br/><br/>
          Quoteside was created as a quiet corner of the internet for those who love words that move, inspire, and bring clarity. We curate timeless quotes—from classic thinkers to modern voices—that remind us of what matters and spark a moment of reflection in the middle of a busy day.
          <br />
          Our goal is simple: to offer a beautifully minimal space where meaningful lines can stand on their own. No noise, no clutter—just words that stay with you.
          <br />
          Whether you’re looking for motivation, wisdom, or a fresh perspective, Quoteside is here to guide you with a little bit of calm and a lot of inspiration.
        </p>
        <div className='emoji'>
        <FaRegFaceSmile />
        <GiButterflyFlower />
        </div>
        <button className='back' onClick={()=>navigate('/homepage')}>Go Back</button>
      </div>
      <Footer />
    </>
  )
}

export default Aboutus