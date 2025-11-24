import React from "react";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";

const footerStyle = {
  width: "100%",
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(15px)",
  padding: "16px 0",
  fontFamily: "sans-serif",
  fontSize: "14px",
  color: "#555",
  textAlign: "center",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div>
        Contact Us 
        </div>
        <div>
      <FaSquareWhatsapp size={25} />
          <FaInstagramSquare size={25}/>
          <FaSnapchatSquare size={25} />
          </div>
      © {year} Quoteside — Words that stay with you.
    </footer>
  );
}
