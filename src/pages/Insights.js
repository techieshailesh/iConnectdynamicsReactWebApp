import React from 'react';
import './Insights.css';

function Insights() {
  const insights = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      category: 'Technology',
      date: 'November 15, 2025',
      summary: 'Explore how artificial intelligence is reshaping industries and business operations.',
      image: '🤖',
      link: 'https://www.gartner.com/en/topics/artificial-intelligence'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      category: 'Cloud',
      date: 'November 10, 2025',
      summary: 'Learn the essential strategies for successful cloud migration projects.',
      image: '☁️',
      link: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2025',
      category: 'Security',
      date: 'November 5, 2025',
      summary: 'Stay informed about the latest cybersecurity threats and solutions.',
      image: '🔐',
      link: 'https://www.gartner.com/en/topics/cybersecurity'
    },
    {
      id: 4,
      title: 'Digital Transformation ROI',
      category: 'Business',
      date: 'October 28, 2025',
      summary: 'Understanding the return on investment for digital transformation initiatives.',
      image: '📈',
      link: 'https://aws.amazon.com/cpg/it-and-digital-transformation/'
    },
    {
      id: 5,
      title: 'DevOps and Agile Integration',
      category: 'Development',
      date: 'October 20, 2025',
      summary: 'How DevOps practices enhance agile development and delivery.',
      image: '⚙️',
      link: 'https://learn.microsoft.com/en-us/azure/devops/'
    },
    {
      id: 6,
      title: 'Data Analytics Insights',
      category: 'Analytics',
      date: 'October 15, 2025',
      summary: 'Leverage data analytics for better business decision-making.',
      image: '📊'
    }
  ];

  return (
    <div className="insights">
      <div className="page-header">
        <h1>Insights</h1>
        <p>Industry trends and expert analysis</p>
      </div>

      <div className="insights-content">
        <p className="intro-text">
          Stay updated with the latest insights, trends, and analysis on IT and digital transformation.
          Our experts share valuable knowledge to help your business stay ahead.
        </p>

        <div className="insights-grid">
          {insights.map((insight) => (
            <article key={insight.id} className="insight-card">
              <div className="insight-image">{insight.image}</div>
              <div className="insight-category">{insight.category}</div>
              <h3>{insight.title}</h3>
              <p className="insight-date">{insight.date}</p>
              <p className="insight-summary">{insight.summary}</p>
              <button 
                className="read-more-btn"
                onClick={() => {
                  if (insight.link) {
                    window.open(insight.link, '_blank');
                  }
                }}
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>

      <section className="newsletter-section">
        <h2>Subscribe to Our Insights</h2>
        <p>Get the latest industry insights delivered to your inbox</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Insights;
