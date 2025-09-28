import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage: React.FC = () => {
  
   const navigate = useNavigate();

  const handleStartJamming = () => {
    navigate('/Dashboard');
  };
  
  return (
      <div className="landing-page">
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">CalJam</div>
          <ul className="nav-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Match your tasks with the perfect music</h1>
          <p>CalJam intelligently pairs your daily tasks with music that enhances focus, creativity, and productivity.</p>
          <li><button className ="cta-button" onClick={handleStartJamming} >Get Started</button></li>

          
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

      {/* Task-Music Match Section
      <section className="match-section" id="match">
        <div className="container">
          <h2 className="section-title">Perfect Task-Music Matches</h2>
          <div className="match-grid">
            <div className="match-card">
              <h4>Deep Focus Work</h4>
              <p>Complex problem-solving, coding, studying</p>
              <span className="genre-tag">Lo-Fi Hip Hop</span>
            </div>
            <div className="match-card">
              <h4>Creative Tasks</h4>
              <p>Design, writing, brainstorming</p>
              <span className="genre-tag">Ambient Electronic</span>
            </div>
            <div className="match-card">
              <h4>Physical Exercise</h4>
              <p>Workouts, running, cleaning</p>
              <span className="genre-tag">Upbeat Pop</span>
            </div>
            <div className="match-card">
              <h4>Routine Tasks</h4>
              <p>Email, admin, organization</p>
              <span className="genre-tag">Indie Folk</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
<footer className="footer" id="about">
  <div className="container">
    <div className="footer-content">
      
      <div className="social-links">
        <a href="#"><i className="fab fa-spotify"></i></a>
        <a href="#"><i className="fab fa-apple"></i></a>
        <a href="#"><i className="fab fa-soundcloud"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
 
      <p>We’re a group of music-loving, code-crafting, caffeine-powered humans on a mission to make planning your day as fun as your favorite playlist! Whether it’s studying, gaming, or dancing like no one’s watching, CalJam keeps your schedule on beat.</p>
      <h2>Meet the team ft CalJam</h2>
      <p>Anchal Badhwar</p>
      <p>Sambhav Jain</p>
      <p>Hayden McGuire</p>
      <p>Manya Asri</p>
      
      <div className="footer-logo">CalJam</div>
         <div className="footer-bottom">
    </div>
    <p>&copy; 2025 CalJam. Match your rhythm to your tasks.</p>
  </div>
</footer>

      
    </div>
  );
};

export default LandingPage;