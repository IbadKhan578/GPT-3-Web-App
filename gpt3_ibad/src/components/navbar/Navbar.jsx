import React, { useState } from 'react'
import {RiMenu3Line,RiCloseLine}  from 'react-icons/ri'
import './navbar.css';
import logo from '../../../src/Assets/GPT-3.svg';




const Menu =()=>(<>
        <a href="#home">Home</a> <br />
        <a href="#gpt3">What is GPT?</a> <br />
        <a href="#possibility">Open AI</a> <br />
        <a href="#features">Case Studies</a> <br />
        <a href="#blog">Library</a> <br />


</>
  )




const Navbar = () => {
  let [toggleMenu,setToggleMenu]=useState(false);



  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-links">
        <Menu />
      </div>
      <div className="nav-btns">
        <a href="">Sign in</a>
        <button className="nav-signup-btn">Sign up</button>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-links">
              <Menu />
                </div>
                 <div className="nav-menu-btns">
        <a href="">Sign in</a>
        <button className="nav-menu-signup-btn">Sign up</button>
      </div>
             
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar