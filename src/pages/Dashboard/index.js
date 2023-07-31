import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UploadComponent from '../../components/UploadComponent';
import { logout } from '../userActions';

import './dashboard.css';

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Add code to handle file upload and save to the user's profile
    // For simplicity, we will just log the file information here
    console.log('File uploaded:', file);
  };

  return (
    <div>
      <h2>Welcome to Your Dashboard, {user.name}!</h2>
      {user.isAuthor && (
        // Show upload section only if the user is an Author
        <div>
          <h3>Upload Section</h3>
          <UploadComponent onFileUpload={handleFileUpload} />
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
