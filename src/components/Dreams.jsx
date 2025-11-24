import Navbar from './Navbar'
import SpecCard from './SpecCard';

import './CSS/Motivational.css'
import Footer from './Footer';


const Dreams = () => {
   

  const quotes = [
    {
      quote:  "Dream big, work hard.",
      author :"Theodore Roosevelt"

    },
    {
      quote:  "Dreams are the blueprint of destiny.",
      author :"Theodore Roosevelt"
    },
    {
      quote: "If you can dream it, you can do it.",
      author: "Anonymous"
    },
    {
      quote: "Dreams turn into reality with effort.",
      author: "Anonymous"
    },
    {
      quote: "Chase your dreams fearlessly.",
      author: "Anonymous"
    },
    {
      quote:  "Let your dreams guide you.",
      author: "Theodore Roosevelt"
    },
    {
      quote:  "Every dream starts with belief.",
      author: "Anonymous"
    },
    {
      quote:"Follow your dreams—they know the way.",
      author: "Anonymous"
    },
    {
      quote:  "Dreams demand courage.",
      author:"Anonymous"
    },
    {
      quote:   "Dream without limits.",
      author: "Anonymous"
    },
    {
      quote:  "Dream big. Start small. Act now.",
      author: "Anonymous"
    },
    {
      quote: "Dreams make life magical.",
      author: "Anonymous"
    },
    {
      quote:  "Protect your dreams.",
      author: "Anonymous"
    },
    {
      quote:  "Dreams grow with determination.",
      author: "Anonymous"
    },
    {
      quote:   "Believe in the beauty of your dreams.",
      author: "Anonymous"
    },
    {
      quote: "Stay focused and never give up.",
      author: "Anonymous"
    },
    {
      quote: "The secret to getting ahead is getting started.",
      author: "Anonymous"
    },
    {
      quote:  "Work hard in silence, let success make the noise.",
      author: "Frank Ocean"
    },
    {
      quote: "If it doesn't challenge you, it won't change you.",
      author: "Fred DeVito"
    },
    {
      quote:  "Rise up and attack the day with enthusiasm.",
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
              header = "Dreams"
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

export default Dreams