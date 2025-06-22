import React from 'react'
import './cta.css';

const CTA = () => {
  return (
    <div className="cta section__margin"  data-aos="fade-up"
     data-aos-duration="2500">
      <div className="cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="cta-button">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default CTA