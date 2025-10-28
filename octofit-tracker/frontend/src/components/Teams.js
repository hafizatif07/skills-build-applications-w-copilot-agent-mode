import React, { useEffect, useState } from 'react';

const API_URL = `${window.location.hostname.includes('app.github.dev') ? `https://${window.location.hostname.replace('-3000', '-8000')}/api/teams/` : '/api/teams/'}`;

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);
  return (
    <div>
      <h2 className="h4 mb-3">Teams</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(teams) && teams.map(team => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
