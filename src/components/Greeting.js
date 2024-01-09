
import React from 'react';
import { useAuth } from '../context/AuthContext';

function Greeting() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {currentUser && <p>Welcome, {currentUser.email}</p>}
      {/* Render dashboard content */}
    </div>
  );
}

export default Greeting;
