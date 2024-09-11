import React from 'react';
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, Footer } from './container'; 
import { Navbar, Newsletter } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Newsletter />
     <Footer />
  </div>
);

export default App;
