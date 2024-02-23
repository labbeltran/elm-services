import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

//Components//
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Referral from './components/Referral';
import ContactUs from './components/ContactUs';

//Router DOM//
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/referral" element={<Referral/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
