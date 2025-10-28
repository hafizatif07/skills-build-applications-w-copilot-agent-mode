
import React, { useEffect, useState } from 'react';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('https://-8000.app.github.dev/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);
  return (
    <div>
      <h2 className="h4 mb-3">Activities</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(activities) && activities.map(act => (
            <tr key={act.id}>
              <td>{act.id}</td>
              <td>{act.name}</td>
              <td>{act.user_email}</td>
              <td>{act.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
