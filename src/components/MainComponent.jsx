import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload";
import URLInput from "./URLInput";

const MainComponent = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleImageUpload = (imageUrl) => {
    setUploadedImage(imageUrl); // Set the uploaded image URL
  };

  const handleUrlSubmit = (url) => {
    setSubmittedUrl(url); // Set the submitted URL
  };

  return (
    <div className="flex space-x-4 p-6">
      {/* Left Side - Photo Upload */}
      <div className="w-1/2 h-64">
        <PhotoUpload onUpload={handleImageUpload} />
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="mt-4" />}
      </div>
      

      {/* Right Side - URL Input */}
      <div className="w-1/2 h-64">
        <URLInput onSubmit={handleUrlSubmit} />
        {submittedUrl && <p className="mt-4">Submitted URL: {submittedUrl}</p>}
      </div>
    </div>
  );
};

export default MainComponent;
