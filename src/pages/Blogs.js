import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
  Pagination,
  Paper,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CategoryIcon from '@mui/icons-material/Category';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Blogs.css';

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React 18',
      author: 'official react.dev',
      date: 'November 20, 2025',
      category: 'React',
      excerpt: 'Learn about the new features in React 18 and how to leverage them in your projects.',
      readTime: '5 min read',
      link: 'https://18.react.dev/'
    },
    {
      id: 2,
      title: 'Angular Best Practices 2025',
      author: 'Lisa Anderson',
      date: 'November 10, 2025',
      category: 'JavaScript',
      excerpt: 'Modern JavaScript best practices to write clean, maintainable, and efficient code.',
      readTime: '10 min read',
      link: 'https://dev.to/codewithrajat/the-ultimate-guide-to-angular-2025-coding-standards-clean-code-real-projects-15ad'
    },
    {
      id: 3,
      title: 'Scaling Your Application with Microservices',
      author: 'Kanerika Inc',
      date: 'November 18, 2025',
      category: 'Architecture',
      excerpt: 'Discover the benefits of microservices architecture and best practices for implementation.',
      readTime: '8 min read',
      link: 'https://medium.com/%40kanerika/how-to-implement-microservices-architecture-for-scalable-applications-52bbea15ce9f'
    },
    {
      id: 4,
      title: 'Understanding REST APIs vs GraphQL',
      author: 'Emma Wilson',
      date: 'November 14, 2025',
      category: 'APIs',
      excerpt: 'A comprehensive comparison of REST APIs and GraphQL to help you choose the right approach.',
      readTime: '7 min read',
      link: 'https://aws.amazon.com/compare/the-difference-between-graphql-and-rest/'
    },
    {
      id: 5,
      title: 'Docker for Modern Development',
      author: 'Alex Chen',
      date: 'November 12, 2025',
      category: 'DevOps',
      excerpt: 'Get started with Docker and containerization for consistent development environments.',
      readTime: '9 min read',
      link: 'https://www.docker.com/resources/what-container'
    }
  ];

  // Calculate pagination values
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  // Handle pagination
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="blogs">
      <div className="page-header">
        <h1>Blog</h1>
        <p>Articles and tutorials from industry experts</p>
      </div>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'justify',
            fontSize: '1.1rem',
            color: '#666',
            mb: 4,
            lineHeight: 1.8,
          }}
        >
          Explore our collection of articles, tutorials, and best practices covering web development,
          cloud solutions, and digital transformation.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {currentBlogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  borderTop: '4px solid #0f4c7e',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(15, 76, 126, 0.2)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CategoryIcon />}
                      label={blog.category}
                      size="small"
                      sx={{
                        backgroundColor: '#0f4c7e',
                        color: '#ffffff',
                        fontWeight: '600',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: '700',
                      color: '#1a2a4e',
                      mb: 1.5,
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      mb: 2,
                      flexWrap: 'wrap',
                      fontSize: '0.85rem',
                      color: '#666',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                      {blog.date}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                      {blog.readTime}
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                    }}
                  >
                    {blog.excerpt}
                  </Typography>
                </CardContent>

                <CardActions sx={{ pt: 0 }}>
                  <Button
                    variant="contained"
                    endIcon={<OpenInNewIcon />}
                    onClick={() => {
                      if (blog.link) {
                        window.open(blog.link, '_blank');
                      }
                    }}
                    sx={{
                      backgroundColor: '#0f4c7e',
                      color: '#ffffff',
                      fontWeight: '600',
                      width: '100%',
                      '&:hover': {
                        backgroundColor: '#1a2a4e',
                      },
                    }}
                  >
                    Read Article
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#0f4c7e',
                fontWeight: '600',
              },
              '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#0f4c7e',
                color: '#ffffff',
              },
              '& .MuiPaginationItem-ellipsis': {
                color: '#0f4c7e',
              },
            }}
          />
        </Box>
      </Container>
    </div>
  );
}

export default Blogs;
