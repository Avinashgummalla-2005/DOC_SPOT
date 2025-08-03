import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AppointmentForm from './pages/AppointmentForm';
import Confirmation from './pages/Confirmation';
// import other pages...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
