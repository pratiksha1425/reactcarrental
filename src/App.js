import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Service from './component/Service';
import Carlistall from './component/Carlistall';
import Testimonial from './component/Testimonial';
import ContactUsForm from './component/ContactUsForm';
import Footer from './component/Footer';
import Login from './component/Login';
import RegistrationForm from './component/RegistrationForm';
import About from './component/About'; // Import the About component

function App() {
  return (
    <Router>
      <div className="container-1">
        <div className="wrapper">
          <div className="content">
            <Header />
            
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Carlistall" element={<Carlistall />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Testimonial" element={<Testimonial />} />
              <Route path="/ContactUsForm" element={<ContactUsForm />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/RegistrationForm" element={<RegistrationForm />} />
            </Routes>
              
           
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
