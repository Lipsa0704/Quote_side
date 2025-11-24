import Navbar from './Navbar'
import SpecCard from './SpecCard';

import './CSS/Motivational.css'
import Footer from './Footer';


const Sad = () => {
   

  const quotes = [
    {
      quote:  "Believe you can and you're halfway there.",
      author :"Theodore Roosevelt"

    },
    {
      quote: "Your only limit is your mind.",
      author :"Theodore Roosevelt"
    },
    {
      quote: "Every day is a new chance to grow.",
      author: "Anonymous"
    },
    {
      quote: "Success starts with self-discipline.",
      author: "Anonymous"
    },
    {
      quote: "Great things take time. Be patient.",
      author: "Anonymous"
    },
    {
      quote:  "Push yourself because no one else will do it for you.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The harder you work, the luckier you get.",
      author: "Anonymous"
    },
    {
      quote:"Small steps every day lead to big changes.",
      author: "Anonymous"
    },
    {
      quote:  "Don't stop until you're proud.",
      author:"Anonymous"
    },
    {
      quote:  "Your future depends on what you do today.",
      author: "Anonymous"
    },
    {
      quote:  "Dream big. Start small. Act now.",
      author: "Anonymous"
    },
    {
      quote: "You are stronger than you think.",
      author: "Anonymous"
    },
    {
      quote: "Growth begins at the end of your comfort zone.",
      author: "Anonymous"
    },
    {
      quote: "Make progress, not excuses.",
      author: "Anonymous"
    },
    {
      quote:  "Don't wait for opportunity. Create it.",
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
              header = "Sad"
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

export default Sad