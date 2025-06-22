import React from 'react'
import './footer.css';
import logo from '../../Assets/GPT-3.svg';

const Footer = () => {
  return (
    <div className="footer section__margin"
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"  >
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to<span>the future before others</span>
        </h1>
        <button>Request early Access</button>
      </div>

      <div className="footer-content">
        <div className="footer-content-section1">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br/> All Rights Reserved</p>
        </div>
        <div className="footer-content-section2">
          <a href="">Links</a>
          <a href="">Overon</a>
          <a href="">Social Media</a>
          <a href="">Counters</a>
          <a href="">Contact</a>
        </div>
        <div className="footer-content-section3">
          <a href="">Company</a>
          <a href="">Terms & conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Contact</a>
        </div>
        <div className="footer-content-section4">
          <a href="">Get in touch</a>
          <a href="">Crechterwoord K12 182  DK Alknjkcb</a>
          <a href="">+923136370275</a>
          <a href="">info@payme.net</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;