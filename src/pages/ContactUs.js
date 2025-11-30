import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

function ContactUs() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('FWnok6harYNe5Qo63');
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS template parameters
    const templateParams = {
      to_email: 'admin@iconnectdynamics.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };
    
    // Send email using EmailJS
    emailjs.send(
      'service_sf8ogcr',  // Replace with your EmailJS service ID
      'template_2yszjip', // Replace with your EmailJS template ID
      templateParams
    ).then(
      (response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Thank you for your message! We will get back to you soon at admin@iconnectdynamics.com');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      },
      (error) => {
        console.log('Failed to send email:', error);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div className="contact-us">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      <div className="contact-content">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="intro-text">
              Have a question or ready to transform your business? Reach out to our team.
              We're here to help!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <h3>📍 Address</h3>
                <p>123 Business Street</p>
                <p>Tech City, TC 12345</p>
                <p>United States</p>
              </div>

              <div className="contact-info">
                <h3>☎️ Phone</h3>
                <p>Main: +1 (970) 469-0840</p>
                <p>Sales: +1 (555) 234-5678</p>
                <p>Support: +1 (555) 345-6789</p>
              </div>

              <div className="contact-detail">
                <h3>📧 Email</h3>
                <p>Info: admin@iconnectdynamics.com</p>
                <p>Sales: sales@iconnectdynamics.com</p>
                <p>Support: support@iconnectdynamics.com</p>
              </div>

              <div className="contact-detail">
                <h3>🕐 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
