import React from 'react';
import '../App.css';

// Import your assets (adjust paths as needed)
import AboutIcon from '../assets/icons/About.svg';
import GetStartedIcon from '../assets/icons/Get Started.svg';
// Import other assets as needed

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">mindstation</div>
          <ul className="nav-links">
            <li><a href="#about">why we do this</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Successful studying made simple</h1>
          <p>Sometimes integrating study time into your routine can be overwhelming. We're here to help!</p>
          <button className="cta-button">get started</button>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section" id="about">
        <div className="container">
          <h2 className="section-title">why we do this</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                {/* <img src={Vector12} alt="Feature 1" /> */}
                <div className="placeholder-icon">📚</div>
              </div>
              <h3>Structured Learning</h3>
              <p>Organize your study materials and create effective learning paths.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                {/* <img src={Vector13} alt="Feature 2" /> */}
                <div className="placeholder-icon">⏰</div>
              </div>
              <h3>Time Management</h3>
              <p>Schedule study sessions that fit perfectly into your daily routine.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                {/* <img src={Vector14} alt="Feature 3" /> */}
                <div className="placeholder-icon">📊</div>
              </div>
              <h3>Progress Tracking</h3>
              <p>Monitor your learning journey and celebrate your achievements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <div className="about-text">
              <p>MindStation was created by students for students. We understand the challenges of balancing study time with other commitments.</p>
              <p>Our mission is to make studying more accessible, organized, and effective for everyone.</p>
            </div>
            <div className="about-visual">
              {/* <img src={Group2} alt="About MindStation" /> */}
              <div className="placeholder-visual">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MindStation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;