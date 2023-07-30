import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/about" exact component={<About />} />
        <Route path="/service" exact component={<Services />} />
        <Route path="/testimonial" exact component={<Testimonial />} />
        <Route path="/contact" exact component={<Contact />} />
      </Routes>
    </div>
  );
}
