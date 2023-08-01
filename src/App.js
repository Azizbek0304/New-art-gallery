// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Testimonial from './pages/Testimonial';
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
        <Route path="/service" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        {/* {user ? <Route path="/dashboard" element={<Dashboard />} /> : null} */}
      </Routes>
    </div>
  );
}
