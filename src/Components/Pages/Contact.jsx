// Contact.jsx
import React, { useState } from "react";
import "../Styles/Contact.css"; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form submission logic (you can connect this with a backend)
    setIsSubmitted(true);
    setFormData({ name: "", message: "" }); // Clear form after submission
  };

  return (
    <div className="contact">
      <section className="contact-section">
        <h1 className="contact-title">Contact Us</h1>
        {isSubmitted && (
          <p className="success-message">
            Your message has been sent successfully!
          </p>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
