import './App.css';
import{Features,Footer,Header,Possibility,WhatGPT3,Blog} from './containers';
import {Article,CTA,Brand,Feature,Navbar} from './components'

function App() {
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
