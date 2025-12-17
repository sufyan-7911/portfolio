
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


