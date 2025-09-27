import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


export const Activity: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  // State for each row
  const [rows, setRows] = useState([
    { activityname: '', startTime: '', endTime: '', type: '' },
  ]);

  // Options for type dropdown
  const typeOptions = ['Study', 'Workout', 'Yoga', 'Commute', 'Cooking', 'Games', 'Party', 'Sleep'];

  // Handle input changes
  const handleChange = (index: number, field: string, value: string) => {
    const newRows = [...rows];
    newRows[index][field as keyof typeof newRows[0]] = value;
    setRows(newRows);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">CalJam</div>
          <ul className="nav-links">
            {/* <li><a href="#timetable">Timetable</a></li> */}
            <li><button className="cta-button" onClick={handleBack}>Back</button></li>
          </ul>
        </nav>
      </header>

      {/* Dashboard Content */}
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
                type="text"
                placeholder="Enter Name"
                value={row.activityname}
                onChange={(e) => handleChange(index, 'activityname', e.target.value)}
                style={{ width: '120px' }}
              />

              {/* Type dropdown */}
              <select
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
                type="text"
                placeholder="Enter Start Time"
                value={row.startTime}
                onChange={(e) => handleChange(index, 'startTime', e.target.value)}
                style={{ width: '120px' }}
              />

              {/* End Time input */}
              <input
                type="text"
                placeholder="Enter End Time"
                value={row.endTime}
                onChange={(e) => handleChange(index, 'endTime', e.target.value)}
                style={{ width: '120px' }}
              />
            </div>
          ))}

          <div style={{ marginTop: '20px' }}>
            <button className="save-btn">Save</button>
            <button className="back-btn" onClick={handleBack}>Back</button>
          </div>
        </div>
      </section>
    </div>
  );
};