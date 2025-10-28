
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-4">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark mb-4">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={require('./octofitapp-small.svg')} alt="Octofit Logo" style={{height: '32px', marginRight: '12px'}} />
          Octofit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/activities">Activities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/teams">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/leaderboard">Leaderboard</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="display-4 mb-4 text-center">Welcome to Octofit Tracker</h1>

      {/* Card */}
      <div className="card mb-4 mx-auto" style={{maxWidth: '28rem'}}>
        <div className="card-body">
          <h5 className="card-title">Track Your Fitness Journey</h5>
          <p className="card-text">Log activities, join teams, and compete on the leaderboard!</p>
          <a href="https://reactjs.org" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn React</a>
        </div>
      </div>

      {/* Table */}
      <h2 className="h4 mb-3">Sample Activity Table</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Duration (min)</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-10-28</td>
            <td>Running</td>
            <td>30</td>
            <td>300</td>
          </tr>
          <tr>
            <td>2025-10-27</td>
            <td>Cycling</td>
            <td>45</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>

      {/* Button */}
      <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>Show Modal</button>

      {/* Form */}
      <form className="mb-4">
        <h2 className="h5 mb-3">Log New Activity</h2>
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activity</label>
          <input type="text" className="form-control" id="activity" placeholder="Enter activity" />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration (min)</label>
          <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bootstrap Modal</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>This is a Bootstrap modal example.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
