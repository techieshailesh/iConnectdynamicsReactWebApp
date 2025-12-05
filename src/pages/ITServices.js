import React from 'react';
import './ITServices.css';

function ITServices() {
  const services = [
    {
      id: 1,
      name: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure and migration services',
      icon: '☁️'
    },
    {
      id: 2,
      name: 'Managed IT Services',
      description: '24/7 monitoring and maintenance of your IT infrastructure',
      icon: '🛠️'
    },
    {
      id: 3,
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data',
      icon: '🔒'
    },
    {
      id: 4,
      name: 'IT Consulting',
      description: 'Expert guidance on digital transformation strategies',
      icon: '📊'
    },
    {
      id: 5,
      name: 'Managed IT Services',
      description: '24/7 monitoring and maintenance of your IT infrastructure',
      icon: '🛠️'
    },
    {
      id: 6,
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱'
    }
  ];

  return (
    <div className="it-services">
      <div className="page-header">
        <h1>IT Services</h1>
        <p>Comprehensive solutions for your business</p>
      </div>

      <div className="services-content">
        <p className="intro-text">
          At iConnect Dynamics, we offer a comprehensive range of IT services designed
          to meet the unique needs of your organization. Our expert team is ready to help
          you leverage technology for competitive advantage.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact our team to discuss your IT needs and get a customized solution</p>
        <button className="cta-btn">Get in Touch</button>
      </section>
    </div>
  );
}

export default ITServices;
