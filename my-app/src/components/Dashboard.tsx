import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentActivity, setCurrentActivity] = useState('Grym Spotify Playlist');
  const [currentTime, setCurrentTime] = useState('2:06 PM');
  const [currentDate, setCurrentDate] = useState('Sat Sep 27');
  
  // Sample activities data
  const activities = [
    { id: 1, name: 'Grym Spotify Playlist', time: '00:00 to 5:00am', spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M' },
    { id: 2, name: 'Focus Study Session', time: '9:00am to 11:00am', spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS' },
    { id: 3, name: 'Workout Mix', time: '6:00pm to 7:00pm', spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP' }
  ];

  const assignments = [
    { id: 1, name: 'Math Homework', due: 'Tomorrow 10:00am' },
    { id: 2, name: 'Science Project', due: 'Oct 3, 2:00pm' },
    { id: 3, name: 'English Essay', due: 'Oct 5, 5:00pm' }
  ];

  const timeSlots = ['1a.m', '2a.m', '3a.m', '4a.m', '5a.m', '6a.m', '7a.m', '8a.m', '9a.m', '10a.m', '11a.m', '12p.m'];

  const handleBackToHome = () => {
    navigate('/');
  };

  const openSpotify = (url: string) => {
    window.open(url, '_blank');
  };

  const addActivity = () => {
    const name = prompt('Enter activity name:');
    const time = prompt('Enter time (e.g., 00:00 to 5:00am):');
    if (name && time) {
      // In a real app, you would add to state or send to backend
      alert(`Added: ${name} at ${time}`);
    }
  };

  const addAssignment = () => {
    const name = prompt('Enter assignment name:');
    const due = prompt('Enter due date:');
    if (name && due) {
      // In a real app, you would add to state or send to backend
      alert(`Added: ${name} due ${due}`);
    }
  };

  return (
    <div className="dashboard">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <nav className="nav container">
          <div className="logo" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>CalJam</div>
          <div className="current-time">
            <div className="time">{currentTime}</div>
            <div className="date">{currentDate}</div>
          </div>
          <ul className="nav-links">
            <li><button onClick={handleBackToHome} className="nav-cta">Back to Home</button></li>
          </ul>
        </nav>
      </header>

      <div className="dashboard-container container">
        <div className="dashboard-layout">
          {/* Left Column - Add Activities/Assignments */}
          <div className="left-column">
            <div className="add-buttons">
              <button className="add-btn primary" onClick={addActivity}>
                <span>+</span> Add an activity
              </button>
              <button className="add-btn secondary" onClick={addAssignment}>
                <span>+</span> Add an assignment
              </button>
            </div>

            {/* Assignments Section */}
            <div className="assignments-section">
              <h3>Assignments</h3>
              <div className="assignments-list">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="assignment-card">
                    <div className="assignment-info">
                      <h4>{assignment.name}</h4>
                      <span className="due-date">Due: {assignment.due}</span>
                    </div>
                    <div className="assignment-actions">
                      <button className="action-btn">⋮</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activities & Music Player */}
          <div className="right-column">
            {/* Activities Section */}
            <div className="activities-section">
              <h3>Activities</h3>
              <div className="activities-list">
                {activities.map(activity => (
                  <div 
                    key={activity.id} 
                    className={`activity-card ${currentActivity === activity.name ? 'active' : ''}`}
                    onClick={() => setCurrentActivity(activity.name)}
                  >
                    <div className="activity-info">
                      <h4>{activity.name}</h4>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                    <button 
                      className="spotify-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openSpotify(activity.spotifyUrl);
                      }}
                    >
                      <i className="fab fa-spotify"></i> Play
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Schedule */}
            <div className="time-schedule">
              <h4>Today's Schedule</h4>
              <div className="time-slots">
                {timeSlots.map((slot, index) => (
                  <div key={index} className="time-slot">
                    <span className="time-label">{slot}</span>
                    <div className="time-line"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Now Playing Section */}
            <div className="now-playing-section">
              <h3>Now Playing</h3>
              <div className="now-playing-card">
                <div className="track-info">
                  <div className="track-cover">
                    <i className="fab fa-spotify"></i>
                  </div>
                  <div className="track-details">
                    <h4>{currentActivity}</h4>
                    <p>CalJam • Spotify</p>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                      <div className="time-display">
                        <span>1:23</span>
                        <span>3:45</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="player-controls">
                  <button className="control-btn">⏮</button>
                  <button className="control-btn play">▶</button>
                  <button className="control-btn">⏭</button>
                  <button 
                    className="spotify-open-btn"
                    onClick={() => openSpotify(activities.find(a => a.name === currentActivity)?.spotifyUrl || '')}
                  >
                    Open in Spotify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;