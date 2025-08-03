import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/doctor-bg.jpg)`,
      }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1>Welcome to <span className="highlight">DocSpot</span></h1>
        <p>Your seamless appointment booking solution for health</p>
        <div className="button-group">
          <button className="blue-button" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="blue-button" onClick={() => navigate('/register')}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
