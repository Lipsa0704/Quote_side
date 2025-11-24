import React from 'react'
import Navbar from './Navbar'
import Cards from './Card'

import './CSS/Homepage.css'
import Footer from './Footer'

const Homepage = () => {

  const quoteTypes = [
    {
      heading: "Motivational",
      title: "Quotes that inspire you to push forward and chase your goals.",
      path :'/motivational'
    },
    {
      heading: "Sad",
      title: "Quotes that capture deep emotions and moments of heartbreak.",
      path :'/sad'
    },
    {
      heading: "Happy",
      title: "Quotes that bring joy, warmth, and positive energy.",
      path:'/happy'
    },
    {
      heading: "Friendship",
      title: "Quotes that celebrate the bond and trust between true friends.",
      path:'/friendship'
    },
    {
      heading: "Travel",
      title: "Quotes that spark your desire to explore the world.",
      path:'/travel'
    },
    {
      heading: "Love",
      title: "Quotes that reflect affection, passion, and emotional connection.",
      path:'/love'
    },
    {
      heading: "Life",
      title: "Quotes that offer wisdom about living meaningfully.",
      path:'/life'
    },
    {
      heading: "Success",
      title: "Quotes that remind you what it takes to achieve greatness.",
      path:'/success'
    },
    {
      heading: "Nature",
      title: "Quotes that honor the beauty and peace found in the natural world.",
      path:'/nature'
    },
    {
      heading: "Flower",
      title: "Quotes that describe the delicacy, color, and symbolism of flowers.",
      path:'/flower'
    },
    {
      heading: "Attitude",
      title: "Quotes that highlight confidence and strong personality.",
      path:'/attitude'
    },
    {
      heading: "Funny",
      title: "Quotes that lighten the mood with humor and wit.",
      path:'/funny'
    },
    {
      heading: "Spiritual",
      title: "Quotes that connect you with inner peace and higher purpose.",
      path:'/spiritual'
    },
    {
      heading: "Family",
      title: "Quotes that cherish the love and foundation of family bonds.",
      path :'/family'
    },
    {
      heading: "Wisdom",
      title: "Quotes that share deep insights and life lessons.",
      path :'/wisdom'
    },
    {
      heading: "Dreams",
      title: "Quotes that encourage believing in your aspirations.",
      path : '/dreams'
    },
    {
      heading: "Courage",
      title: "Quotes that inspire bravery in difficult times.",
      path:'/courage'
    },
    {
      heading: "Peace",
      title: "Quotes that promote calmness, balance, and harmony.",
      path:'/peace'
    },
    {
      heading: "Adventure",
      title: "Quotes that excite you to embrace the unknown.",
      path:'/adventure'
    },
    {
      heading: "Self-Love",
      title: "Quotes that remind you to value and care for yourself.",
      path:'/self'
    }
  ];

  return (
    <>
      <Navbar />
      <div className='quotecard'>
        {quoteTypes.map(function (elem) {
          return (
            <Cards
              heading={elem.heading}
              title={elem.title}
              path={elem.path}
            />)
        })
        }
      </div>
      <Footer/>
    </>
  )
}

export default Homepage