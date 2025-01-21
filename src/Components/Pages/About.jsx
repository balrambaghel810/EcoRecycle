// About.jsx
import React from "react";
import "../Styles/About.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <h1 className="about-title">About Ecorecycle</h1>
        <p className="about-description">
          Ecorecycle is dedicated to making a difference in the world by
          promoting sustainability through recycling and reusing resources. Our
          mission is to create awareness and empower individuals and communities
          to reduce waste, recycle more, and contribute to a greener planet.
        </p>

        <div className="about-info">
          <div className="info-item">
            <h2>Our Mission</h2>
            <p>
              To reduce waste and promote a circular economy by making recycling
              more accessible and convenient for everyone.
            </p>
          </div>

          <div className="info-item">
            <h2>Our Vision</h2>
            <p>
              To build a sustainable future where waste is minimized, resources
              are reused, and the environment is protected.
            </p>
          </div>

          <div className="info-item">
            <h2>Our Goals</h2>
            <ul>
              <li>Increase awareness about recycling</li>
              <li>Provide solutions for better waste management</li>
              <li>
                Collaborate with communities and businesses to promote
                sustainability
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
