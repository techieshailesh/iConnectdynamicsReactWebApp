import React, { useState } from 'react';
import {
  Typography,
  Box,
  Chip,
  Grid,
  Card,
  CardContent,
  Container,
  Paper,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupIcon from '@mui/icons-material/Group';
import './Home.css';

function Home() {
  const [expandedAccordion, setExpandedAccordion] = useState('expert-team');

  const handleAccordionChange = (panel) => {
    setExpandedAccordion(expandedAccordion === panel ? null : panel);
  };

  const teamMembers = [
    {
      id: 'cloud-engineering',
      title: 'Cloud Engineering & IT Services Excellence',
      subtitle: 'Our team consists of senior cloud architects, solution engineers, and DevOps specialists with extensive experience delivering secure, reliable, and high-performance systems. We support enterprises across all stages of their cloud journey—from assessment and migration to modernization and ongoing cloud optimization.',
      description: 'Key capabilities include:',
      details: [
        'End-to-end solution design & implementation on AWS and Azure',
        'Cloud-native application development using microservices, serverless, and containerized architectures',
        'Infrastructure automation with Terraform, ARM/Bicep, and AWS CDK',
        'CI/CD pipelines and DevSecOps engineering using GitHub, Azure DevOps, and AWS DevOps toolchains',
        'Cloud governance, compliance, monitoring, and cost optimization',
        'Enterprise data engineering, ETL/ELT pipelines, and cloud analytics solutions'
      ],
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI & GenAI Solutions',
      subtitle: 'Iconnect Dynamics LLC is at the forefront of AI-driven transformation. Our team builds agentic AI systems capable of autonomous reasoning, workflow orchestration, and contextual decision-making to enhance efficiency and human-machine collaboration.',
      description: 'We leverage:',
      details: [
        'Intelligent copilots for enterprise workflows',
        'AI-powered automation for IT operations, customer service, HR, finance, and more',
        'Multi-agent systems for decision automation and workflow execution',
        'Enterprise-grade RAG solutions with secure data pipelines',
        'AI integration with ERP, CRM, EHR, and custom enterprise platforms',
        'Model governance, observability, and responsible AI practices',
      ],
    },
  ];

  const innovations = [
    { title: 'AI & Machine Learning', description: 'Leveraging advanced AI technologies for intelligent solutions' },
    { title: 'Cloud Architecture', description: 'Scalable and secure cloud-native applications' },
    { title: 'DevOps Excellence', description: 'Continuous integration and deployment pipelines' },
    { title: 'Microservices', description: 'Modular and flexible service-oriented architecture' },
  ];

  const supportServices = [
    { title: '24/7 Technical Support', description: 'Round-the-clock assistance from our expert team' },
    { title: 'Dedicated Account Manager', description: 'Personalized support and strategic guidance' },
    { title: 'Rapid Response Time', description: 'Quick resolution of critical issues' },
    { title: 'Regular Updates & Maintenance', description: 'Proactive system monitoring and optimization' },
  ];

  const reliabilityFeatures = [
    { title: '99.9% Uptime SLA', description: 'Enterprise-grade reliability and availability' },
    { title: 'Disaster Recovery', description: 'Comprehensive backup and recovery solutions' },
    { title: 'Security Compliance', description: 'ISO 27001, SOC 2, and GDPR compliant' },
    { title: 'Load Balancing', description: 'High-performance infrastructure management' },
  ];

  const accordionItems = [
    { id: 'expert-team', title: 'Expert Team', subtitle: 'Highly skilled professionals', icon: GroupIcon, data: teamMembers, isTeam: true },
    { id: 'innovation', title: 'Innovation', subtitle: 'Cutting-edge technology', icon: LightbulbIcon, data: innovations },
    { id: 'support', title: 'Support', subtitle: '24/7 customer support', icon: HeadsetMicIcon, data: supportServices },
    { id: 'reliability', title: 'Reliability', subtitle: 'Trusted worldwide', icon: ShieldIcon, data: reliabilityFeatures },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to iConnect Dynamics</h1>
          <p>Transforming Business Through Technology Innovation</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: '700',
              color: '#1a2a4e',
              mb: 4,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
            }}
          >
            Why Choose Us
          </Typography>

          {/* Inline Accordion Buttons */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 4 }}>
            {accordionItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Paper
                  key={item.id}
                  onClick={() => handleAccordionChange(item.id)}
                  sx={{
                    p: 2.5,
                    cursor: 'pointer',
                    backgroundColor: expandedAccordion === item.id ? '#1a2a4e' : '#ffffff',
                    border: '2px solid #0f4c7e',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(15, 76, 126, 0.2)',
                      transform: 'translateY(-4px)',
                      backgroundColor: expandedAccordion === item.id ? '#1a2a4e' : '#f0f6ff',
                    },
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: '2.5rem',
                      color: expandedAccordion === item.id ? '#4db8ff' : '#0f4c7e',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        color: expandedAccordion === item.id ? '#4db8ff' : '#1a2a4e',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        color: expandedAccordion === item.id ? '#b3d9ff' : '#666',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Paper>
              );
            })}
          </Box>

          {/* Expanded Content */}
          <Box sx={{ mt: 4 }}>
            {accordionItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: expandedAccordion === item.id ? 'block' : 'none',
                  animation: expandedAccordion === item.id ? 'slideDown 0.3s ease' : 'none',
                  '@keyframes slideDown': {
                    from: { opacity: 0, transform: 'translateY(-10px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: '#f8fbff',
                    border: '2px solid #0f4c7e',
                    boxShadow: '0 4px 16px rgba(15, 76, 126, 0.15)',
                    borderRadius: '12px',
                    p: 4,
                    mb: 3,
                  }}
                >
                  <Typography
                    paragraph
                    sx={{
                      mb: 3,
                      color: '#555',
                      fontSize: '1rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {item.isTeam
                      ? 'At Iconnect Dynamics LLC, our expert team brings deep technical excellence and strategic leadership across modern IT services, cloud engineering, and next-generation AI innovation. We specialize in designing, developing, and operationalizing scalable enterprise solutions on AWS and Microsoft Azure, while pioneering agentic AI systems built on cutting-edge GenAI technologies such as OpenAI, Azure OpenAI, and Microsoft Copilot ecosystems..'
                      : item.id === 'innovation'
                      ? 'Cutting-edge technology and modern development practices.'
                      : item.id === 'support'
                      ? '24/7 customer support to ensure your success.'
                      : 'Trusted by businesses worldwide for dependable solutions.'}
                  </Typography>

                  <Grid container spacing={3}>
                    {item.data.map((dataItem, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderLeft: '4px solid #0f4c7e',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            backgroundColor: '#ffffff',
                            '&:hover': {
                              boxShadow: '0 4px 16px rgba(15, 76, 126, 0.2)',
                              transform: 'translateY(-4px)',
                            },
                          }}
                        >
                          <CardContent>
                            {item.isTeam ? (
                              <>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: '700',
                                    color: '#1a2a4e',
                                    mb: 0.5,
                                    fontSize: '1.1rem',
                                  }}
                                >
                                  {dataItem.title}
                                </Typography>
                                {dataItem.subtitle && (
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: '#4db8ff',
                                      fontWeight: '600',
                                      mb: 1.5,
                                      fontSize: '0.8rem',
                                      display: 'block',
                                    }}
                                  >
                                    {dataItem.subtitle}
                                  </Typography>
                                )}
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: '#0f4c7e',
                                    fontWeight: '600',
                                    mb: 2,
                                    fontSize: '0.9rem',
                                  }}
                                >
                                  {dataItem.description}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                  {dataItem.details.map((detail, i) => (
                                    <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                                      <Box
                                        sx={{
                                          minWidth: '6px',
                                          width: '6px',
                                          height: '6px',
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
                                          fontSize: '0.85rem',
                                          lineHeight: 1.4,
                                        }}
                                      >
                                        {detail}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              </>
                            ) : (
                              <>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 'bold',
                                    color: '#1a2a4e',
                                    mb: 1.5,
                                  }}
                                >
                                  {dataItem.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                                  {dataItem.description}
                                </Typography>
                              </>
                            )}
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default Home;
