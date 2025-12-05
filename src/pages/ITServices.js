import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ITServices.css';

function ITServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: 'Managed IT Services & Consulting',
      description: '24/7 monitoring and maintenance of your IT infrastructure',
      icon: '⚙️',
      details: 'At Iconnect Dynamics LLC, we provide comprehensive Managed IT Services and Technology Consulting tailored to meet the evolving needs of modern enterprises. Our mission is to empower organizations with reliable, scalable, and secure technology solutions that drive operational excellence, reduce complexity, and accelerate digital transformation.',
      additionalDetails: 'With deep expertise in cloud engineering, enterprise architecture, and advanced application development, we deliver end-to-end services that support mission-critical systems and ensure long-term business success.',
      features: [
        'Technology Consulting – Strategy, Architecture & Modernization',
        'Enterprise architecture advisory',
        'Application modernization and transformation roadmaps',
        'Cloud strategy, migration, and optimization',
        'DevOps, CI/CD, and automation consulting',
        "Data engineering, analytics, and AI readiness",
      ]
    },
    {
      id: 2,
      name: 'Staffing Services',
      description: 'Connect with experienced IT professionals and cloud engineers',
      icon: '👥',
      details: 'At Iconnect Dynamics LLC, we specialize in connecting organizations with highly skilled, industry-ready IT professionals, cloud engineers, and technology experts who can drive innovation and deliver measurable results. Our staffing services are built on a deep understanding of modern enterprise needs and the rapidly evolving digital landscape.',
      additionalDetails: 'Whether you\'re scaling your engineering teams, accelerating cloud adoption, or executing mission-critical technology initiatives, we provide exceptional talent tailored to your unique requirements.',
      features: [
        'AWS & Azure Cloud Engineering',
        'DevOps & Automation',
        'Full Stack Development',
        'Data Engineering, Analytics & AI/ML',
        'Enterprise Application Architecture',
        'QA Automation & Software Testing',
        'Project & Program Management',
      ]
    }
  ];

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };

  const handleContactUs = () => {
    handleCloseDialog();
    navigate('/?openContact=true');
  };

  return (
    <div className="it-services">
      <div className="page-header">
        <h1>IT Services</h1>
        <p>Comprehensive solutions for your business</p>
      </div>

      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
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
            At iConnect Dynamics, we offer a comprehensive range of IT services designed
            to meet the unique needs of your organization. Our expert team is ready to help
            you leverage technology for competitive advantage.
          </Typography>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
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
                    <Box
                      sx={{
                        fontSize: '3rem',
                        mb: 2,
                        textAlign: 'center',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: '700',
                        color: '#1a2a4e',
                        mb: 1.5,
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleOpenDialog(service)}
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
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Service Details Modal */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: '#1a2a4e',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '1.3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {selectedService?.name}
          <CloseIcon
            onClick={handleCloseDialog}
            sx={{ cursor: 'pointer', fontSize: '1.5rem', '&:hover': { opacity: 0.7 } }}
          />
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {selectedService && (
            <>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '700',
                  color: '#1a2a4e',
                  mb: 2,
                }}
              >
                Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  lineHeight: 1.8,
                  mb: 3,
                  textAlign: 'justify',
                }}
              >
                {selectedService.details}
              </Typography>
              {selectedService.additionalDetails && (
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    lineHeight: 1.8,
                    mb: 3,
                    textAlign: 'justify',
                  }}
                >
                  {selectedService.additionalDetails}
                </Typography>
              )}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: '700',
                  color: '#1a2a4e',
                  mb: 2,
                }}
              >
                Strategic IT & Cloud Talent Solutions
              </Typography>
              <Box sx={{ mb: 3 }}>
                {selectedService.features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      mb: 1.5,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: '8px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#4db8ff',
                        borderRadius: '50%',
                        mt: 1,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: '#666',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            onClick={handleContactUs}
            sx={{
              backgroundColor: '#0f4c7e',
              color: '#ffffff',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#1a2a4e',
              },
            }}
          >
            Contact Us
          </Button>
        </DialogActions>
      </Dialog>

      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact our team to discuss your IT needs and get a customized solution</p>
        <button className="cta-btn" onClick={() => navigate('/?openContact=true')}>Get in Touch</button>
      </section>
    </div>
  );
}

export default ITServices;
