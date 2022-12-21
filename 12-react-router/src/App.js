import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs.js';
import SubmittedForm from './pages/SubmittedForm';

export default function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
    
        </ul>
      </nav>

      {/* Contains our route and is the section of the component
      that will update */}
      <Routes>

        {/* If the path is just /, render the <Home> component  */}
        <Route path="/" element={
          <Home/>
        }/>

        <Route path="/about-us" element={
           <AboutUs/> 
        }/>

        <Route path="/contact-us" element={
          <ContactUs/>
        }/>

        <Route path="/submitted" element={
          <SubmittedForm/>
        }/>

      </Routes>

    </Router>
  )
}