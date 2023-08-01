// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import DigitalDesign from './pages/DigitalDesign';
import PhotoPage from './pages/PhotoPage';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard'; // Add the Dashboard component import

export default function App() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/digitaldesign" element={<DigitalDesign />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/drawings" element={<Drawings />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/contact" element={<Contact />} />
        {/* {user ? <Route path="/dashboard" element={<Dashboard />} /> : null} */}
      </Routes>
    </div>
  );
}
