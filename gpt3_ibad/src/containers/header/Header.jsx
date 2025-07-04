import React from 'react'
import './header.css';
import Group from '../../Assets/Group.png'
import ai from '../../Assets/ai.png'
const Header = () => {
  return (
    <div className="header" id='header'  data-aos="zoom-in" >
      <div className="header-content  section__padding">
        <h1 className="gradient__text ">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="header-content-people">
          <img src={Group} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
       

      </div>
       <div className="header-image">
          <img src={ai} alt="" />
        </div>
    </div>
  );
}

export default Header