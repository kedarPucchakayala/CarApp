
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import  Home  from './components/Home';
import  Aboutus from './components/Aboutus';
import  Contact  from './components/Contact';
import  Services  from './components/Services';
import  Fleets from './components/Fleets';
import  Blog  from './components/Blog';
import  Reserve from './components/Reserve';
import Footer from './components/Footer'

function App() {
  return (
    
      <div>
        <Header />
        <Navbar />
     
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleets" element={<Fleets />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/reserve" element={<Reserve />} /> 
        </Routes> 
        <Footer/>
      </div>
    
  );
}

export default App;
