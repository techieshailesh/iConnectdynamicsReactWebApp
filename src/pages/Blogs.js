import React from 'react';
import './Blogs.css';

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React 18',
      author: 'John Smith',
      date: 'November 20, 2024',
      category: 'React',
      excerpt: 'Learn about the new features in React 18 and how to leverage them in your projects.',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Scaling Your Application with Microservices',
      author: 'Sarah Johnson',
      date: 'November 18, 2024',
      category: 'Architecture',
      excerpt: 'Discover the benefits of microservices architecture and best practices for implementation.',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Web Performance Optimization Tips',
      author: 'Mike Davis',
      date: 'November 16, 2024',
      category: 'Performance',
      excerpt: 'Essential techniques to improve your web application performance and user experience.',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Understanding REST APIs vs GraphQL',
      author: 'Emma Wilson',
      date: 'November 14, 2024',
      category: 'APIs',
      excerpt: 'A comprehensive comparison of REST APIs and GraphQL to help you choose the right approach.',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Docker for Modern Development',
      author: 'Alex Chen',
      date: 'November 12, 2024',
      category: 'DevOps',
      excerpt: 'Get started with Docker and containerization for consistent development environments.',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'JavaScript Best Practices 2024',
      author: 'Lisa Anderson',
      date: 'November 10, 2024',
      category: 'JavaScript',
      excerpt: 'Modern JavaScript best practices to write clean, maintainable, and efficient code.',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="blogs">
      <div className="page-header">
        <h1>Blog</h1>
        <p>Articles and tutorials from our experts</p>
      </div>

      <div className="blogs-content">
        <p className="intro-text">
          Explore our collection of articles, tutorials, and best practices covering web development,
          cloud solutions, and digital transformation.
        </p>

        <div className="blogs-list">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-post">
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-author">By {blog.author}</span>
                <button className="read-article-btn">Read Article</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="pagination">
        <button className="pagination-btn">← Previous</button>
        <span className="page-number">Page 1 of 5</span>
        <button className="pagination-btn">Next →</button>
      </section>
    </div>
  );
}

export default Blogs;
