// UploadComponent.js

import React, { useState } from 'react';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement your image upload logic here
    if (selectedFile) {
      // You can now use the selectedFile to upload the image to the server or perform any other actions.
      // For example, you can use FormData and Axios or Fetch API to send the image to the server.
      const formData = new FormData();
      formData.append('image', selectedFile);

      console.log('Uploading image:', selectedFile);
      // ... Your image upload logic here ...
    }
  };

  return (
    <div>
      <h4>Upload Your Image</h4>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadComponent;
