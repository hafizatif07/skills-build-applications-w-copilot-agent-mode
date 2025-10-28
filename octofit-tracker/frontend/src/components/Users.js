
import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://-8000.app.github.dev/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h2 className="h4 mb-3">Users</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
