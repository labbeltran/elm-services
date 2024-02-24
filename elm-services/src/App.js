import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Components//
import Home from './components/Home.js';
import AboutUs from './components/AboutUs.js';
import Services from './components/Services.js';
import Referral from './components/Referral.js';
import ContactUs from './components/ContactUs.js';

//Router DOM//
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'



function App() {


  let aboutUsPara= [
    `Experiencing Learning Moments (ELM) Services, LLC. provides the necessary support to enable individuals with intellectual and/or developmental disabilities (I/DD) to lead enriched lives by facilitating communal participation and social integration. ELM Services operates on a belief that no person should have to work in a setting which is segregated due to the nature or severity of their disability. ELM Services strives to accomplish this endeavor through the provision and implementation of an individualized, person-centered support that empowers our clients to integrate into their local communities and learn how to socialize with peers and other individuals within the community while forming and enjoying natural relationships with people other than paid providers of support services.`,  
    `The Independent Living Skills (ILS) program, Supported Living Services (SLS) program, and Community Integration Training Program (CITP) are designed as a activities of daily living (ADL's), Adaptive Skills Training (AST), Community Integration Skills Training Program (CITP) and social skills training program to recognize, develop, and build the necessary skillset while living at home with their circle of support, moving out and living independently, and participating in their community-all at the level at which the client chooses and/ or is outlined in their person-centered plan.`,
    `ELM Services generally starts the process by evaluating the client and their interests, evaluating what skills need to be built and developed to tailor services to their individual needs. Once done, ELM Services identify local community sites that are of interest to the individual and help facilitate the fostering of skills needed to facilitate community integration and socialization. Throughout the training program, ELM Services ensures that clients are able to participate at their own speed while meeting their person-centered outcomes and any personal goals they may have.` 
  ];

  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/referral">Referral for Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="route-dom">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs aboutUsPara={aboutUsPara} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
