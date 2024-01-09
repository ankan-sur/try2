import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {currentUser && (
        <div>
          <h2>Welcome, {currentUser.email}</h2>
          {/* Conditional rendering based on role */}
          {currentUser.role === 'artist' && <p>Artist specific content</p>}
          {currentUser.role === 'client' && <p>Client specific content</p>}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
