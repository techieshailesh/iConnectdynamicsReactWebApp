import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import {
  Typography,
  Box,
  Chip,
  Grid,
  Card,
  CardContent,
  Container,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupIcon from '@mui/icons-material/Group';
import CloseIcon from '@mui/icons-material/Close';
import './Home.css';

function Home() {
  const [searchParams] = useSearchParams();
  const [expandedAccordion, setExpandedAccordion] = useState('expert-team');
  const [openContactForm, setOpenContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init('FWnok6harYNe5Qo63');
    // Check if openContact parameter is set to true
    if (searchParams.get('openContact') === 'true') {
      setOpenContactForm(true);
    }
  }, [searchParams]);

  const handleAccordionChange = (panel) => {
    setExpandedAccordion(expandedAccordion === panel ? null : panel);
  };

  const handleOpenContactForm = () => {
    setOpenContactForm(true);
  };

  const handleCloseContactForm = () => {
    setOpenContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: 'admin@iconnectdynamics.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
    };
    
    emailjs.send(
      'service_sf8ogcr',
      'template_2yszjip',
      templateParams
    ).then(
      (response) => {
        console.log('Email sent successfully:', response);
        alert('Thank you for your interest! We will contact you soon at admin@iconnectdynamics.com');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        handleCloseContactForm();
      },
      (error) => {
        console.error('Failed to send email:', error);
        alert('There was an issue sending your message. Please try again or contact admin@iconnectdynamics.com directly.');
      }
    );
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
    { title: 'Cloud-Driven Innovation', description: 'We leverage the full power of AWS and Microsoft Azure cloud ecosystems to build scalable, secure, and high-performing digital solutions. Our teams innovate through:', details: ['Cloud-native application design', 'Serverless and Customer-Centric Innovation Focus architectures', 'Automated DevOps pipelines', 'Cloud governance, observability, and resilience patterns', 'Next-generation data engineering and analytics solutions'],},
    { title: 'Pioneering Agentic AI Solutions', description: 'Iconnect Dynamics LLC is committed to advancing the frontier of enterprise AI through the development of Agentic AI systems—autonomous, intelligent agents capable of reasoning, taking actions, and orchestrating end-to-end workflows.', details: ['OpenAI GPT models and Azure OpenAI Service', 'Multi-agent orchestration frameworks', 'Retrieval-Augmented Generation (RAG) and vector search', 'Autonomous workflow agents and decision-making engines', 'Responsible AI, security, and governance methodologies'] },
    { title: '3. Culture of Curiosity, Creativity & Experimentation', description: 'Our team thrives on a culture of curiosity—where new ideas are encouraged and innovation is a shared responsibility. We:', details: ['Host internal innovation labs and rapid prototyping sprints', 'Encourage cross-functional collaboration between cloud, AI, and engineering teams', 'Explore emerging technologies such as LLMs, multi-agent architectures, generative analytics, and cloud automation', 'Promote continuous learning through certifications, research, and applied experimentation'] },
    { title: 'Customer-Centric Innovation Focus', description: 'Innovation at Iconnect Dynamics LLC is always tied to customer value. We build solutions that:', details: ['Reduce operational complexity', 'Improve efficiency and productivity', 'Drive automation and intelligent decision-making', 'Enable secure, compliant, and scalable digital transformation'] },
  ];

  const supportServices = [
    { title: '24/7 Technical Support', description: 'Round-the-clock assistance from our expert team', details: ['Immediate response to critical issues', 'Multi-channel support (phone, email, chat)', 'Knowledge base and documentation', 'Proactive monitoring'] },
    { title: 'Dedicated Account Manager', description: 'Personalized support and strategic guidance', details: ['Single point of contact', 'Regular business reviews', 'Strategic planning assistance', 'Priority issue resolution'] },
    { title: 'Rapid Response Time', description: 'Quick resolution of critical issues', details: ['SLA-backed response times', 'Escalation procedures', 'Emergency support available', 'Root cause analysis'] },
  ];

  const accordionItems = [
    { id: 'expert-team', title: 'Expert Team', subtitle: 'Highly skilled professionals', icon: GroupIcon, data: teamMembers, isTeam: true },
    { id: 'innovation', title: 'Innovation', subtitle: 'Cutting-edge technology', icon: LightbulbIcon, data: innovations },
    { id: 'support', title: 'Support', subtitle: '24/7 customer support', icon: HeadsetMicIcon, data: supportServices },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to iConnect Dynamics</h1>
          <p>Transforming Business Through Technology Innovation</p>
          <button className="cta-button" onClick={handleOpenContactForm}>Get Started</button>
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
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 4 }}>
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
                      ? 'At Iconnect Dynamics LLC, innovation is not just a practice—it is the foundation of our identity. Our culture is built on continuous learning, experimentation, and a forward-thinking mindset that empowers our teams to transform complex business challenges into intelligent, scalable, and future-ready solutions.'
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
                            {item.isTeam || dataItem.details ? (
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
                                  {dataItem.details && dataItem.details.map((detail, i) => (
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

      {/* Contact Form Modal */}
      <Dialog open={openContactForm} onClose={handleCloseContactForm} maxWidth="sm" fullWidth>
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
          Get In Touch
          <CloseIcon
            onClick={handleCloseContactForm}
            sx={{ cursor: 'pointer', fontSize: '1.5rem', '&:hover': { opacity: 0.7 } }}
          />
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <form onSubmit={handleSubmitForm}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0f4c7e',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0f4c7e',
                },
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              margin="normal"
              variant="outlined"
              helperText="Optional"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0f4c7e',
                },
              }}
            />
            <TextField
              fullWidth
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleFormChange}
              margin="normal"
              variant="outlined"
              helperText="Optional"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0f4c7e',
                },
              }}
            />
            <FormControl
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0f4c7e',
                },
              }}
            >
              <InputLabel id="service-select-label">Service of Interest</InputLabel>
              <Select
                labelId="service-select-label"
                id="service-select"
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                label="Service of Interest"
              >
                <MenuItem value="">Select a service</MenuItem>
                <MenuItem value="AWS Cloud">AWS Cloud</MenuItem>
                <MenuItem value="Azure Cloud">Azure Cloud</MenuItem>
                <MenuItem value="Agentic AI / GenAI">Agentic AI / GenAI</MenuItem>
                <MenuItem value="Custom Software Development">Custom Software Development</MenuItem>
                <MenuItem value="DevOps / Automation">DevOps / Automation</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Tell us about your project or requirements..."
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0f4c7e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0f4c7e',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#0f4c7e',
                },
              }}
            />
          </form>
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button
            onClick={handleCloseContactForm}
            sx={{
              color: '#666',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmitForm}
            variant="contained"
            sx={{
              backgroundColor: '#0f4c7e',
              color: '#ffffff',
              fontWeight: '600',
              padding: '8px 24px',
              '&:hover': {
                backgroundColor: '#1a2a4e',
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Home;
