import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaSignOutAlt  } from 'react-icons/fa'; // Icons
import '../../styles/navigation/Navigation.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate('/admin'); // Redirect to login page
  };

  return (
    <nav className={`navigation ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </button>

      {/* Navigation Menu */}
      <ul>
        <li><FaHome className="icon" /> {!isCollapsed && 'Home'}</li>
        <li><FaUser className="icon" /> {!isCollapsed && 'Profile'}</li>
        <li><FaCog className="icon" /> {!isCollapsed && 'Settings'}</li>
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              <FaSignOutAlt className="icon" /> {!isCollapsed && 'Logout'}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
