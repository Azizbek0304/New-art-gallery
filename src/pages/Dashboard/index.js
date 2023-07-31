// Dashboard.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../userActions';

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Add code to handle file upload and save to the user's profile
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* Display other profile information here */}
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Upload Profile Picture</h2>
        <input type="file" onChange={handleFileUpload} />
        {/* Add other upload fields here */}
      </div>
    </div>
  );
};

export default Dashboard;
