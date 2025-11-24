import Navbar from './Navbar'
import SpecCard from './SpecCard';

import './CSS/Motivational.css'
import Footer from './Footer';


const Courage = () => {
   

  const quotes = [
    {
      quote:   "Courage starts with showing up.",
      author :"Theodore Roosevelt"

    },
    {
      quote:  "Bravery is feeling fear but acting anyway.",
      author :"Theodore Roosevelt"
    },
    {
      quote:  "You are stronger than your fear.",
      author: "Anonymous"
    },
    {
      quote: "Courage is a choice.",
      author: "Anonymous"
    },
    {
      quote: "Face life with courage.",
      author: "Anonymous"
    },
    {
      quote:   "Courage builds character.",
      author: "Theodore Roosevelt"
    },
    {
      quote:  "Stand tall even in storms.",
      author: "Anonymous"
    },
    {
      quote: "Courage creates growth.",
      author: "Anonymous"
    },
    {
      quote:  "Be brave with your life.",
      author:"Anonymous"
    },
    {
      quote:  "Courage leads to freedom.",
      author: "Anonymous"
    },
    {
      quote: "Fear is temporary, courage is forever.",
      author: "Anonymous"
    },
    {
      quote: "Do what scares you.",
      author: "Anonymous"
    },
    {
      quote: "Courage opens doors.",
      author: "Anonymous"
    },
    {
      quote: "Be fearless in pursuit of greatness.",
      author: "Anonymous"
    },
    {
      quote:  "Courage shines brightest in darkness.",
      author: "Anonymous"
    },
    {
      quote: "Let courage guide you.",
      author: "Anonymous"
    },
    {
      quote: "Bravery begins in the heart.",
      author: "Anonymous"
    },
    {
      quote:  "Rise with courage.",
      author: "Frank Ocean"
    },
    {
      quote: "Courage makes possibilities real.",
      author: "Fred DeVito"
    },
    {
      quote:   "Acts of courage create change.",
      author: "Anonymous"
    }
  ];

  return (
    <>
      <Navbar />
      <div className='qucard'>
        {quotes.map(function (elem) {
          return (
            <SpecCard
              header = "Courage"
              quote={elem.quote}
              author={elem.author}
            />)
        })
        }
      </div>
      <Footer/>
    </>
  )
}

export default Courage