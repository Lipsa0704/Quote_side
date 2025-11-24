import Navbar from './Navbar'
import SpecCard from './SpecCard';

import './CSS/Motivational.css'
import Footer from './Footer';


const Attitude = () => {
   

  const quotes = [
    {
      quote:   "Confidence is silent. Insecurities are loud.",
      author :"Theodore Roosevelt"

    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author :"Theodore Roosevelt"
    },
    {
      quote: "I don’t follow the crowd; I lead it.",
      author: "Anonymous"
    },
    {
      quote: "Your vibe attracts your tribe.",
      author: "Anonymous"
    },
    {
      quote:  "Born to express, not impress.",
      author: "Anonymous"
    },
    {
      quote:   "Attitude is my middle name.",
      author: "Theodore Roosevelt"
    },
    {
      quote:  "Be a voice, not an echo.",
      author: "Anonymous"
    },
    {
      quote:"I’m not perfect but I’m limited edition.",
      author: "Anonymous"
    },
    {
      quote:  "Make your own rules.",
      author:"Anonymous"
    },
    {
      quote:  "Less talk, more action.",
      author: "Anonymous"
    },
    {
      quote:  "Stay real. Stay you.",
      author: "Anonymous"
    },
    {
      quote:  "Don’t chase. Attract.",
      author: "Anonymous"
    },
    {
      quote: "My life, my choices.",
      author: "Anonymous"
    },
    {
      quote: "Elegance is an attitude.",
      author: "Anonymous"
    },
    {
      quote:  "Be bold, be brave, be you.",
      author: "Anonymous"
    },
    {
      quote: "Take the risk or lose the chance.",
      author: "Anonymous"
    },
    {
      quote:  "I am my own competition.",
      author: "Anonymous"
    },
    {
      quote:  "Do it with passion or not at all.",
      author: "Frank Ocean"
    },
    {
      quote: "Be the energy you want to attract.",
      author: "Fred DeVito"
    },
    {
      quote:  "Dream without fear.",
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
              header = "Atitude"
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

export default Attitude