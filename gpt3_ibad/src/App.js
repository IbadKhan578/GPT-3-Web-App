import './App.css';
import{Features,Footer,Header,Possibility,WhatGPT3,Blog} from './containers';
import {Article,CTA,Brand,Feature,Navbar} from './components'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,     // Animation duration in ms
      once: false,         // Animate only once
    });
  }, [])




  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
