// Services.jsx
import React, { useState } from "react";
import "../Styles/Services.css"; // Import the CSS file for styling

const Services = () => {
  const [image, setImage] = useState(null);
  const [recyclable, setRecyclable] = useState(null);
  const [store, setStore] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    checkRecyclableMaterial(file);
  };

  // Mock function to check if material is recyclable (this could be replaced with actual logic)
  const checkRecyclableMaterial = (file) => {
    // Example of mock logic based on file type
    if (file.type === "image/jpeg" || file.type === "image/png") {
      setRecyclable(true); // Assume it's recyclable for demonstration
      fetchNearestStore();
    } else {
      setRecyclable(false);
      setStore(null);
    }
  };

  // Mock function to fetch nearest recycling store (this could be replaced with actual API call)
  const fetchNearestStore = () => {
    setStore("Recycling Center #123, Main Street, City"); // Example of a nearby store
  };

  return (
    <div className="services">
      <section className="services-section">
        <h1 className="services-title">Our Services</h1>
        <p className="services-description">
          At Ecorecycle, we help you recycle materials in a smart way! Just
          upload the image of the material, and we'll tell you if it's
          recyclable and guide you to the nearest recycling center.
        </p>

        <div className="upload-section">
          <label htmlFor="image-upload" className="upload-label">
            Upload Material Image
          </label>
          <input
            type="file"
            id="image-upload"
            onChange={handleFileChange}
            accept="image/*"
            className="upload-input"
          />
        </div>

        {image && (
          <div className="image-preview">
            <h3>Uploaded Image</h3>
            <img src={image} alt="Material" className="preview-image" />
          </div>
        )}

        {recyclable !== null && (
          <div className="recyclable-status">
            <h3>Recyclable Status: </h3>
            {recyclable ? (
              <p>This material is recyclable!</p>
            ) : (
              <p>This material is not recyclable.</p>
            )}
          </div>
        )}

        {store && recyclable && (
          <div className="nearest-store">
            <h3>Nearest Recycling Store:</h3>
            <p>{store}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
