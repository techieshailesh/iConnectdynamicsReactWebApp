import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import './AboutUs.css';

function AboutUs() {
  const values = [
    {
      icon: LightbulbIcon,
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology',
    },
    {
      icon: EmojiEventsIcon,
      title: 'Excellence',
      description: 'We deliver high-quality solutions every time',
    },
    {
      icon: SecurityIcon,
      title: 'Integrity',
      description: 'We build trust through transparent partnerships',
    },
    {
      icon: PeopleIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve their goals',
    },
  ];

  const reasons = [
    {
      title: 'Expertise',
      description: 'Industry-leading professionals with deep technical knowledge',
      icon: '🎯',
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success, and we\'re committed to it',
      icon: '💼',
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing maintenance and support to keep your systems running smoothly',
      icon: '🛠️',
    },
  ];

  return (
    <div className="about-us">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Discover our story and mission</p>
      </div>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Our Story Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#1a2a4e',
              mb: 3,
            }}
          >
            Our Story
          </Typography>
          <Paper
            sx={{
              p: 3,
              backgroundColor: '#f8f9fa',
              borderLeft: '4px solid #0f4c7e',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                fontSize: '1.05rem',
                color: '#555',
                lineHeight: 1.8,
              }}
            >
              iConnect Dynamics was founded with a vision to deliver innovative IT solutions
              that transform businesses. By uniting deep expertise in AWS/Azure cloud technologies with advanced Agentic AI engineering, we cultivate an environment where people, technology, and creativity converge to build transformative digital experiences. We are committed to pushing boundaries, embracing new possibilities, and delivering intelligent solutions that shape the future of enterprise technology.
            </Typography>
          </Paper>
        </Box>

        {/* Our Mission Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#1a2a4e',
              mb: 3,
            }}
          >
            Our Mission
          </Typography>
          <Paper
            sx={{
              p: 3,
              backgroundColor: '#f8f9fa',
              borderLeft: '4px solid #0f4c7e',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                fontSize: '1.05rem',
                color: '#555',
                lineHeight: 1.8,
              }}
            >
              At Iconnect Dynamics, our mission is to empower businesses through cutting-edge technology, intelligent cloud solutions, and exceptional service—enabling them to innovate, grow, and succeed in the digital era. Our mission is to empower organizations with advanced cloud and AI-driven solutions that fuel innovation, accelerate growth, and ensure success in a rapidly evolving digital world.
            </Typography>
          </Paper>
        </Box>

        {/* Our Values Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#1a2a4e',
              mb: 3,
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
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
                    <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '3rem',
                            color: '#0f4c7e',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: '700',
                          color: '#1a2a4e',
                          mb: 1,
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          lineHeight: 1.6,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Why Partner With Us Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#1a2a4e',
              mb: 3,
            }}
          >
            Why Partner With Us
          </Typography>
          <Grid container spacing={3}>
            {reasons.map((reason, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    borderTop: '4px solid #4db8ff',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(77, 184, 255, 0.2)',
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                    <Box
                      sx={{
                        fontSize: '3rem',
                        mb: 2,
                        textAlign: 'center',
                      }}
                    >
                      {reason.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: '700',
                        color: '#1a2a4e',
                        mb: 1,
                      }}
                    >
                      {reason.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.6,
                      }}
                    >
                      {reason.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AboutUs;
