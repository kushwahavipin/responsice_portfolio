import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";


const Footer = () => {
  return (
    <>
      <div className="footer" id='Footer'>
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>info@vipinkushwaha.com</span>
        <div className="f-icons">
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
