import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { addActivity } from './backend';

export const Activity: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // State for each row
  const [rows, setRows] = useState([
    { activityname: '', startTime: '', endTime: '', type: '' },
  ]);

  const handleSubmit = () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const typeInput = document.getElementById("type") as HTMLInputElement;
    const startTimeInput = document.getElementById("startTime") as HTMLInputElement;
    const endTimeInput = document.getElementById("endTime") as HTMLInputElement;

    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const startTime = startTimeInput.value.trim();
    const endTime = endTimeInput.value.trim();

    addActivity(name, type, startTime, endTime); 
    navigate('/dashboard');
  };

  // Options for type dropdown
  const typeOptions = ['Study', 'Workout', 'Yoga', 'Commute', 'Cooking', 'Games', 'Party', 'Sleep'];

  // Handle input changes
  const handleChange = (index: number, field: string, value: string) => {
    const newRows = [...rows];
    newRows[index][field as keyof typeof newRows[0]] = value;
    setRows(newRows);
  };

  return (
    <div className="activity">
      {/* Header */}
    <header className="header">
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

      {/* Activity Content */}
      <section className="container" style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>Activity</h1>
        <p>Plan your day and match tasks with music</p>

        <div className="timetable" id="timetable">
          <h2>Add an activity</h2>

          {/* Table Headers */}
          <div className="timetable-header" style={{ display: 'flex', gap: '10px', fontWeight: 'bold' }}>
            <div style={{ width: '120px' }}>Name</div>
            <div style={{ width: '120px' }}>Type</div>
            <div style={{ width: '120px' }}>Start Time</div>
            <div style={{ width: '120px' }}>End Time</div>
          </div>

          {/* Timetable Rows */}
          {rows.map((row, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              {/* Name input */}
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                value={row.activityname}
                onChange={(e) => handleChange(index, 'activityname', e.target.value)}
                style={{ width: '120px' }}
              />

              {/* Type dropdown */}
              <select
                id="type"
                value={row.type}
                onChange={(e) => handleChange(index, 'type', e.target.value)}
                style={{ width: '120px' }}
              >
                <option value="" disabled>Select Type</option>
                {typeOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>

              {/* Start Time input */}
              <input
                id="startTime"
                type="text"
                placeholder="Enter Start Time"
                value={row.startTime}
                onChange={(e) => handleChange(index, 'startTime', e.target.value)}
                style={{ width: '120px' }}
              />

              {/* End Time input */}
              <input
                id="endTime"
                type="text"
                placeholder="Enter End Time"
                value={row.endTime}
                onChange={(e) => handleChange(index, 'endTime', e.target.value)}
                style={{ width: '120px' }}
              />
            </div>
          ))}

          <div style={{ marginTop: '20px' }}>
            <button
              id="saveButton"
              className="save-btn"
              onClick={handleSubmit}
              type = "submit"
            >Save</button>
            <button className="back-btn" onClick={handleBack}>Back</button>
          </div>
        </div>
      </section>
    </div>
  );
};