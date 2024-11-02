// About.js
import React from 'react';
import './App.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About Flashcard App</h1>
      <p>
        The Flashcard App is designed to help users learn and memorize information effectively through interactive flashcards. 
        Users can choose different categories and set the number of questions they want to answer.
      </p>
      <p>
        Each flashcard displays a question, with multiple choice options, and reveals the correct answer upon clicking. 
        This makes studying fun and engaging, allowing users to track their progress and improve their knowledge in various subjects.
      </p>
      <h2>How to Use the App</h2>
      <ul>
        <li>Select a category from the dropdown menu.</li>
        <li>Choose the number of questions you want to answer.</li>
        <li>Click on "Generate" to create your flashcards.</li>
        <li>Click on a flashcard to flip it and see the answer!</li>
      </ul>

      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" required></textarea>
        </div>
        <div className="form-group">
          <button className="btn">Send Message</button>
        </div>
      </form>
    </div>
  );
}
