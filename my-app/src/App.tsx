import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Dashboard from './components/hub'; // Fixed import name

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Fixed component name */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;