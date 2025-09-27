import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleDashboardNav = () => {
    navigate('/dashboard');
  };

  return (
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">CalJam</div>
          <ul className="nav-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#match">Task-Music Match</a></li>
            <li><a href="#about">About</a></li>
          {/*}  <li><button onClick={handleDashboardNav} className="nav-cta">Dashboard</button></li> */}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Match your tasks with the perfect music</h1>
          <p>CalJam intelligently pairs your daily tasks with music that enhances focus, creativity, and productivity.</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
          
          {/* Music Visualizer */}
          <div className="music-visualizer">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How CalJam Works</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Task Analysis</h3>
              <p>Tell us what you're working on - studying, coding, creative work, or exercise.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎵</div>
              <h3>Music Matching</h3>
              <p>Our algorithm finds the perfect music genre and tempo for your specific task.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Boost Productivity</h3>
              <p>Experience enhanced focus and efficiency with scientifically-backed music choices.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">CalJam</div>
            <div className="social-links">
              <a href="#"><i className="fab fa-spotify"></i></a>
              <a href="#"><i className="fab fa-apple"></i></a>
              <a href="#"><i className="fab fa-soundcloud"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CalJam. Match your rhythm to your tasks.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;