import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function Home() {
  return (
    <div>
      <h1 className="display-4 mb-4 text-center">Welcome to Octofit Tracker</h1>
      <div className="card mb-4 mx-auto" style={{maxWidth: '28rem'}}>
        <div className="card-body">
          <h5 className="card-title">Track Your Fitness Journey</h5>
          <p className="card-text">Log activities, join teams, and compete on the leaderboard!</p>
          <a href="https://reactjs.org" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn React</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark mb-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={require('./octofitapp-small.svg')} alt="Octofit Logo" style={{height: '32px', marginRight: '12px'}} />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;