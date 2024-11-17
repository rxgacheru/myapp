import React from "react";
import "../App.css"; // Main CSS file for shared styles

export default function Contact() {
  return (
    <div className="about-container contact-form">
      <h1>Contact Us</h1>
      <form
        action="https://formspree.io/f/mleqpger"
        method="POST"
        className="form-group"
      >
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Kenya"
            required
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Subject:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
