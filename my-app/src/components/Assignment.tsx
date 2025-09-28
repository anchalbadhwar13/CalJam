import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const Assignment: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };
  const handleBackToHome = () => {
    navigate('/');
  };

  // State for each row
  const [rows, setRows] = useState([
    { difficulty: '', name: '', dueDate: '' },
  ]);

  // Options for difficulty dropdown
  const difficultyOptions = ['Easy', 'Medium', 'Hard'];

  // Handle input changes
  const handleChange = (index: number, field: string, value: string) => {
    const newRows = [...rows];
    newRows[index][field as keyof typeof newRows[0]] = value;
    setRows(newRows);
  };

  return (
    <div className="assignment">
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

      {/* Assignment Content */}
      <section className="container" style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>Assignments</h1>
        <p>Manage your assignments and deadlines</p>

        <div className="timetable" id="timetable">
          <h2>Add an Assignment</h2>

          {/* Table Headers */}
          <div className="timetable-header" style={{ display: 'flex', gap: '10px', fontWeight: 'bold' }}>
            <div style={{ width: '120px' }}>Difficulty</div>
            <div style={{ width: '200px' }}>Name</div>
            <div style={{ width: '150px' }}>Due Date</div>
          </div>

          {/* Timetable Rows */}
          {rows.map((row, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              {/* Difficulty dropdown */}
              <select
                value={row.difficulty}
                onChange={(e) => handleChange(index, 'difficulty', e.target.value)}
                style={{ width: '120px' }}
              >
                <option value="" disabled>Select</option>
                {difficultyOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>

              {/* Name input */}
              <input
                type="text"
                placeholder="Enter Name"
                value={row.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                style={{ width: '200px' }}
              />

              {/* Due Date input */}
              <input
                type="text"
                placeholder="Enter Due Date"
                value={row.dueDate}
                onChange={(e) => handleChange(index, 'dueDate', e.target.value)}
                style={{ width: '150px' }}
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