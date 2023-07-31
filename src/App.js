import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'; // Import the reducer

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';

const store = createStore(reducer); // Create the Redux store with the reducer

export default function App() {
  return (
    <Provider store={store}> {/* Provide the Redux store to the entire app */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Provider>
  );
}
