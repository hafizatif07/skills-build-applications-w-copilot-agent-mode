import React, { useEffect, useState } from 'react';

const API_URL = `${window.location.hostname.includes('app.github.dev') ? `https://${window.location.hostname.replace('-3000', '-8000')}/api/workouts/` : '/api/workouts/'}`;

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);
  return (
    <div>
      <h2 className="h4 mb-3">Workouts</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(workouts) && workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
