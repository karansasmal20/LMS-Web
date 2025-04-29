import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      <form>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Other Ways to Connect</h2>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <p>Phone: <a href="tel:+712345678">+712 345 7898</a></p>
        <p>Address: 123 Main Street, Anytown, USA</p>
        {/* Add social media links here */}
      </div>
    </div>
  );
}

export default ContactPage;