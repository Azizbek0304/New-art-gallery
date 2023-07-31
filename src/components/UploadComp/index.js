import React from 'react';

const UploadComponent = ({ onFileUpload }) => {
  return (
    <div>
      <input type="file" onChange={onFileUpload} />
      {/* You can add more elements and logic for displaying uploaded files */}
    </div>
  );
};

export default UploadComponent;
