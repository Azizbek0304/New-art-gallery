import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonial from './pages/Testimonal';
import Contact from './pages/Contact';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Services} />
        <Route path="/testimonial" exact component={Testimonial} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}
