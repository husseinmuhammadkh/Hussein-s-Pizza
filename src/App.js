import React, { useState } from 'react';
import "./App.css";
import Navbar from '../src/components/Navbar';
import Home from './pages/Home.js';
import Footer from '../src/components/Footer.js';
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;