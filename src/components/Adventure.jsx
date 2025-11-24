import Navbar from './Navbar'
import SpecCard from './SpecCard';

import './CSS/Motivational.css'
import Footer from './Footer';


const Adventure = () => {
   

  const quotes = [
    {
      quote:  "Adventure begins where comfort ends.",
      author :"Anonymous Author"

    },
    {
      quote: "Live for the adventure.",
      author :"Anonymous Author"
    },
    {
      quote:  "Every day is an adventure.",
      author: "Unknown"
    },
    {
      quote: "Say yes to new adventures.",
      author: "Anonymous"
    },
    {
      quote:  "Life itself is an adventure.",
      author: "Anonymous"
    },
    {
      quote:   "Dare to explore.",
      author: "Anonymous Author"
    },
    {
      quote:  "Adventure feeds the soul.",
      author: "Anonymous"
    },
    {
      quote:"Go where you feel alive.",
      author: "Anonymous"
    },
    {
      quote:  "Adventure awaits beyond fear.",
      author:"Unknown Author"
    },
    {
      quote:  "Seek adventure daily.",
      author: "Anonymous"
    },
    {
      quote: "The world is full of adventures.",
      author: "Anonymous"
    },
    {
      quote:  "Be brave, choose adventure.",
      author: "Unknown Author"
    },
    {
      quote:  "Be brave, choose adventure.",
      author: "Anonymous"
    },
    {
      quote:  "Adventure makes life exciting.",
      author: "Anonymous"
    },
    {
      quote:  "Escape the ordinary.",
      author: "Anonymous"
    },
    {
      quote: "Adventure teaches the best lessons.",
      author: "Unknown"
    },
    {
      quote:  "Live life with adventure in your heart.",
      author: "Anonymous"
    },
    {
      quote:   "Take the road less traveled.",
      author: "Unknown"
    },
    {
      quote:  "Adventure begins now.",
      author: "Anonymous Author"
    },
    {
      quote: "Explore with courage.",
      author: "Anonymous Author"
    }
  ];

  return (
    <>
      <Navbar />
      <div className='qucard'>
        {quotes.map(function (elem) {
          return (
            <SpecCard
              header = "Adventure"
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

export default Adventure