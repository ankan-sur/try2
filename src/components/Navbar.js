import React from 'react'
import { useAuth } from '../context/AuthContext'
import { logoutUser } from '../services/AuthService';

const Navbar = () => {
    const { currentUser } = useAuth();
  
    const handleLogout = async () => {
      try {
        await logoutUser();
        // Optionally redirect to home or sign-in page
      } catch (error) {
        console.error('Error signing out: ', error);
      }
    };
  
    return (
      <div>
        <nav>
          {/* Navigation links */}
          {currentUser ? (
            <>
              {/* Role-based links */}
              <button onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              {/* Links for non-authenticated users */}
            </>
          )}
        </nav>
      </div>
    );
  };

export default Navbar
