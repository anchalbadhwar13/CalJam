import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentActivity, setCurrentActivity] = useState('Grym Spotify Playlist');
  const [embedPlayer, setEmbedPlayer] = useState<string>('');
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  // Spotify playlist IDs (just the ID part, not full URI)
  const activities = [
    { 
      id: 1, 
      name: 'Gym Spotify Playlist', 
      time: '00:00 to 5:00am', 
      spotifyId: '37i9dQZF1DXcBWIGoYBM5M', 
      description: 'Chill lo-fi beats for focused work'
    },
    { 
      id: 2, 
      name: 'Focus Study Session', 
      time: '9:00am to 11:00am', 
      spotifyId: '37i9dQZF1DX8Uebhn9wzrS', 
      description: 'Minimal electronic for deep concentration'
    },
    { 
      id: 3, 
      name: 'Deep Work', 
      time: '2:00pm to 4:00pm', 
      spotifyId: '37i9dQZF1DX3PFzdbtx1Us', 
      description: 'Ambient sounds for programming'
    },
    { 
      id: 4, 
      name: 'Workout Mix', 
      time: '6:00pm to 7:00pm', 
      spotifyId: '37i9dQZF1DX76Wlfdnj7AP', 
      description: 'Energetic tracks for exercise'
    },
    { 
      id: 5, 
      name: 'Relaxing Piano', 
      time: '8:00pm to 10:00pm', 
      spotifyId: '37i9dQZF1DX4sWSpwq3LiO', 
      description: 'Calm piano for winding down'
    }
  ];

  const assignments = [
    { id: 1, name: 'Math Homework', due: 'Tomorrow 10:00am', completed: false },
    { id: 2, name: 'Science Project', due: 'Oct 3, 2:00pm', completed: false },
    { id: 3, name: 'English Essay', due: 'Oct 5, 5:00pm', completed: true }
  ];

  

  const handleActivitySelect = (activity: any) => {
    setCurrentActivity(activity.name);
    const embedUrl = `https://open.spotify.com/embed/playlist/${activity.spotifyId}`;
    setEmbedPlayer(embedUrl);
    setIsPlayerVisible(true);
  };

  const togglePlayerVisibility = () => {
    setIsPlayerVisible(!isPlayerVisible);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const addActivity = () => {
    const name = prompt('Enter activity name:');
    const time = prompt('Enter time (e.g., 00:00 to 5:00am):');
    const spotifyUrl = prompt('Enter Spotify playlist URL:');
    
    if (name && time && spotifyUrl) {
      
      const spotifyId = spotifyUrl.split('/').pop()?.split('?')[0];
      if (spotifyId) {
        alert(`Added: ${name} - Spotify playlist will be available`);
       
      }
    }
  };

  const addAssignment = () => {
    const name = prompt('Enter assignment name:');
    const due = prompt('Enter due date:');
    if (name && due) {
      alert(`Added: ${name} due ${due}`);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <nav className="nav container">
          <div className="logo" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>CalJam</div>
          <div className="current-time">
            <div className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div className="date">{new Date().toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          </div>
          <ul className="nav-links">
            <li><button onClick={handleBackToHome} className="nav-cta">Back to Home</button></li>
          </ul>
        </nav>
      </header>

      <div className="dashboard-container container">
        <div className="dashboard-layout">
          {/* Left Column */}
          <div className="left-column">
            <div className="add-buttons">
              <button className="add-btn primary" onClick={addActivity}>
                <span>+</span> Add an activity
              </button>
              <button className="add-btn secondary" onClick={addAssignment}>
                <span>+</span> Add an assignment
              </button>
            </div>

            <div className="assignments-section">
              <h3>Assignments</h3>
              <div className="assignments-list">
                {assignments.map(assignment => (
                  <div key={assignment.id} className={`assignment-card ${assignment.completed ? 'completed' : ''}`}>
                    <div className="assignment-info">
                      <h4>{assignment.name}</h4>
                      <span className="due-date">Due: {assignment.due}</span>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="activities-section">
              <h3>Activities</h3>
              <div className="activities-list">
                {activities.map(activity => (
                  <div 
                    key={activity.id} 
                    className={`activity-card ${currentActivity === activity.name ? 'active' : ''}`}
                    onClick={() => handleActivitySelect(activity)}
                  >
                    <div className="activity-info">
                      <h4>{activity.name}</h4>
                      <span className="activity-time">{activity.time}</span>
                      <p className="activity-desc">{activity.description}</p>
                    </div>
                    <button className="spotify-play-btn">
                      <i className="fab fa-spotify"></i> Play
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Spotify Player Section */}
            <div className="player-section">
              <div className="player-header">
                <h3>Now Playing</h3>
                <button className="toggle-player-btn" onClick={togglePlayerVisibility}>
                  {isPlayerVisible ? 'Hide Player' : 'Show Player'}
                </button>
              </div>
              
              {isPlayerVisible && embedPlayer && (
                <div className="spotify-embed-container">
                  <iframe
                    src={embedPlayer}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="encrypted-media"
                    title="Spotify Player"
                    className="spotify-embed"
                  ></iframe>
                  <div className="player-actions">
                    <button 
                      className="open-spotify-btn"
                      onClick={() => window.open(`https://open.spotify.com/playlist/${activities.find(a => a.name === currentActivity)?.spotifyId}`, '_blank')}
                    >
                      <i className="fab fa-spotify"></i> Open in Spotify
                    </button>
                  </div>
                </div>
              )}

              {isPlayerVisible && !embedPlayer && (
                <div className="no-music-selected">
                  <i className="fab fa-spotify"></i>
                  <p>Select an activity to start playing music</p>
                  <small>Music will play directly from Spotify</small>
                </div>
              )}
            </div>

           
            
              </div>
            </div>
          </div>
        </div>
      
    
  );
};

export default Dashboard;