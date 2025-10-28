import React, { useEffect, useState } from 'react';

const API_URL = `${window.location.hostname.includes('app.github.dev') ? `https://${window.location.hostname.replace('-3000', '-8000')}/api/leaderboard/` : '/api/leaderboard/'}`;

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);
  return (
    <div>
      <h2 className="h4 mb-3">Leaderboard</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(leaderboard) && leaderboard.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.team}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
