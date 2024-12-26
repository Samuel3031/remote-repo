import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/login"); 
  };

  return (
    <button onClick={handleLogout} className="submit-btn">登出</button>
  );
};

export default Logout;
