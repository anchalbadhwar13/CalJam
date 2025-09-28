import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import {Activity} from './components/Activity';
import {Assignment} from './components/Assignment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
          <Route path="/activity" element={<Activity />} />
          <Route path="/assignment" element={<Assignment />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;