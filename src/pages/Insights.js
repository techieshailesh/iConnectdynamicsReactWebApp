import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
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
  TextField,
  Paper,
  Pagination,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import './Insights.css';

function Insights() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    emailjs.init('FWnok6harYNe5Qo63');
  }, []);

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
      image: '📊',
      link: 'https://aws.amazon.com/analytics/'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      const templateParams = {
        to_email: email,
        subject: 'Welcome to iConnect Dynamics Insights Newsletter',
        message: 'Thank you for subscribing to iConnect Dynamics Insights! You will now receive the latest industry trends, expert analysis, and technology insights delivered to your inbox. Stay tuned for valuable content on AI, cloud migration, cybersecurity, digital transformation, and more.',
      };

      emailjs.send('service_sf8ogcr', 'template_2yszjip', templateParams)
        .then(() => {
          setSubscribed(true);
          setEmail('');
          setLoading(false);
          setTimeout(() => setSubscribed(false), 3000);
        })
        .catch((error) => {
          console.error('Email send failed:', error);
          setLoading(false);
          alert('Subscription failed. Please try again.');
        });
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(insights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedInsights = insights.slice(startIndex, endIndex);

  return (
    <div className="insights">
      <div className="page-header">
        <h1>Insights</h1>
        <p>Industry trends and expert analysis</p>
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
          Stay updated with the latest insights, trends, and analysis on IT and digital transformation.
          Our experts share valuable knowledge to help your business stay ahead.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {paginatedInsights.map((insight) => (
            <Grid item xs={12} sm={6} lg={4} key={insight.id}>
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
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                      textAlign: 'center',
                    }}
                  >
                    {insight.image}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip
                      icon={<CategoryIcon />}
                      label={insight.category}
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
                    {insight.title}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      mb: 2,
                      fontSize: '0.85rem',
                      color: '#666',
                    }}
                  >
                    <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                    {insight.date}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {insight.summary}
                  </Typography>
                </CardContent>

                <CardActions sx={{ pt: 0 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                      if (insight.link) {
                        window.open(insight.link, '_blank');
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#0f4c7e',
                '&.Mui-selected': {
                  backgroundColor: '#0f4c7e',
                  color: '#ffffff',
                },
              },
            }}
          />
        </Box>

        {/* Newsletter Section */}
        <Paper
          sx={{
            backgroundColor: '#1a2a4e',
            color: '#ffffff',
            p: 4,
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: '700',
              mb: 1,
            }}
          >
            Subscribe to Our Insights
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              opacity: 0.9,
            }}
          >
            Get the latest industry insights delivered to your inbox
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              display: 'flex',
              gap: 1,
              maxWidth: '500px',
              mx: 'auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                flex: 1,
                minWidth: '250px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#ffffff',
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<EmailIcon />}
              disabled={loading}
              sx={{
                backgroundColor: '#4db8ff',
                color: '#1a2a4e',
                fontWeight: '700',
                '&:hover': {
                  backgroundColor: '#3aa5e8',
                },
              }}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </Box>

          {subscribed && (
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: '#4db8ff',
                fontWeight: '600',
              }}
            >
              ✓ Thank you for subscribing!
            </Typography>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Insights;
