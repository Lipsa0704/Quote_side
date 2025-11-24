import Card from 'react-bootstrap/Card';

import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

import { useState } from "react";

import './CSS/SpecCard.css';

function SpecCard(props) {

  const [isRed, setIsRed] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Card className='specCard'>
        <Card.Header className='specheader'>
          {props.header} 
          <span className="icons">
           <FaHeart
      onClick={() => setIsRed(!isRed)}
      style={{ color: isRed ? "red" : "grey" }} />
            <MdOutlineFileDownload size={20} />
            <IoIosShareAlt onClick={() => setShowPopup(true)} style={{ cursor: "pointer" }} />
          </span>
        </Card.Header>

        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.quote}</p>
            <footer className="blockquote-footer">
              {props.author}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>Share this Quote <span
              className="close" 
              onClick={() => setShowPopup(false)} >
              <IoCloseCircle size={28} style={{color:"red" , marginLeft:"20px"}}/>
           </span></h3>

             

          <div className='app'>
          <FaSquareWhatsapp size={50} style={{color:"green"}}/>
          <FaInstagramSquare size={50}/>
          <FaSnapchatSquare size={50} style={{color:"yellow"}}/>
            </div>

            <button className='more'>More Options</button>

          </div>
        </div>
      )}
    </>
  );
}

export default SpecCard;
