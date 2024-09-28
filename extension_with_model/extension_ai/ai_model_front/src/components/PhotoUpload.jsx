import React, { useState } from 'react';

const PhotoUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [submittedImageName, setSubmittedImageName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setSubmittedImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      onUpload(imageUrl);
      setIsSubmitted(true); // Set submitted state to true
      setImage(null); // Clear the image state
      setPreview(null); // Clear the preview state
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Upload Image</h2>
      {!isSubmitted ? ( // Conditionally render input and form based on submission state
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      ) : (
        <p className="mt-4 text-green-600">Submitted image: {submittedImageName}</p>
      )}
      {preview && !isSubmitted && (
        <img src={preview} alt="Preview" className="mt-4 rounded" />
      )}
    </div>
  );
};

export default PhotoUpload;
