import React, { useState, useEffect, useMemo } from 'react';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Careers.css';

const JOBS = [
  {
    id: 1,
    title: 'Senior SRE / DevOps Engineer (Observability Specialist)',
    department: 'Site Reliability Engineering',
    city: 'Columbus',
    state: 'Ohio',
    type: 'Full-time',
    level: 'Senior',
    experience: '6+ years',
    posted: 'September 1, 2026',
    description:
      'Champion reliability, scalability, and deep system visibility through enterprise-grade observability, monitoring, and alerting frameworks.',
    summary:
      "We are seeking a highly skilled Senior SRE / DevOps Engineer with 6+ years of experience to join our infrastructure engineering team. In this role, you will bridge the gap between development and operations by championing reliability, scalability, and deep system visibility. The ideal candidate will be an automation-first engineer with specialized expertise in designing enterprise-grade Observability, Monitoring, and Alerting frameworks. You will work closely with engineering teams to define reliability targets, manage risk using data-driven metrics, and write clean, automated tooling to eliminate operational toil.",
    responsibilities: [
      'Reliability Engineering & Governance: Define, implement, and track SLIs (Service Level Indicators) and SLOs (Service Level Objectives) in alignment with business SLAs (Service Level Agreements).',
      'Error Budget Management: Establish and manage Error Budgets to balance rapid feature deployment with infrastructure stability, facilitating data-driven decision-making when deployment gates need to be adjusted.',
      'Observability & Monitoring Infrastructure: Architect and scale enterprise observability frameworks across complex environments, ensuring end-to-end visibility via distributed tracing, log aggregation, and metric collection.',
      'Intelligent Alerting: Design and tune high-signal, actionable Alerting configurations to eliminate alert fatigue, drastically reduce MTTR (Mean Time to Resolution), and proactively catch regressions before customers are affected.',
      'Automation & Scripting: Leverage Python to build custom instrumentation tools, automate synthetic monitoring, create self-healing infrastructure scripts, and eliminate manual engineering toil.',
      'CI/CD & Infrastructure as Code (IaC): Maintain and optimize robust DevOps pipelines and manage cloud-native infrastructure using IaC tooling (such as Terraform) to support reliable deployments.',
    ],
  },
  {
    id: 11,
    title: 'Senior SRE / DevOps Engineer (Observability Specialist)',
    department: 'Site Reliability Engineering',
    city: 'Minneapolis',
    state: 'Minnesota',
    type: 'Full-time',
    level: 'Senior',
    experience: '6+ years',
    posted: 'September 1, 2026',
    description:
      'Champion reliability, scalability, and deep system visibility through enterprise-grade observability, monitoring, and alerting frameworks.',
    summary:
      "We are seeking a highly skilled Senior SRE / DevOps Engineer with 6+ years of experience to join our infrastructure engineering team. In this role, you will bridge the gap between development and operations by championing reliability, scalability, and deep system visibility. The ideal candidate will be an automation-first engineer with specialized expertise in designing enterprise-grade Observability, Monitoring, and Alerting frameworks. You will work closely with engineering teams to define reliability targets, manage risk using data-driven metrics, and write clean, automated tooling to eliminate operational toil.",
    responsibilities: [
      'Reliability Engineering & Governance: Define, implement, and track SLIs (Service Level Indicators) and SLOs (Service Level Objectives) in alignment with business SLAs (Service Level Agreements).',
      'Error Budget Management: Establish and manage Error Budgets to balance rapid feature deployment with infrastructure stability, facilitating data-driven decision-making when deployment gates need to be adjusted.',
      'Observability & Monitoring Infrastructure: Architect and scale enterprise observability frameworks across complex environments, ensuring end-to-end visibility via distributed tracing, log aggregation, and metric collection.',
      'Intelligent Alerting: Design and tune high-signal, actionable Alerting configurations to eliminate alert fatigue, drastically reduce MTTR (Mean Time to Resolution), and proactively catch regressions before customers are affected.',
      'Automation & Scripting: Leverage Python to build custom instrumentation tools, automate synthetic monitoring, create self-healing infrastructure scripts, and eliminate manual engineering toil.',
      'CI/CD & Infrastructure as Code (IaC): Maintain and optimize robust DevOps pipelines and manage cloud-native infrastructure using IaC tooling (such as Terraform) to support reliable deployments.',
    ],
  },
  {
    id: 2,
    title: 'Azure Solutions Architect',
    department: 'Cloud & DevOps',
    city: 'Austin',
    state: 'Texas',
    type: 'Full-time',
    level: 'Senior',
    experience: '10+ years',
    posted: 'August 25, 2026',
    description:
      'Design, automate, govern, and migrate robust enterprise workloads to Microsoft Azure using modern IaC and CI/CD practices.',
    summary:
      'We are seeking a highly skilled and seasoned Senior Azure Solutions Architect with a minimum of 10 years of experience in enterprise IT environments. In this role, you will design, automate, govern, and migrate robust enterprise workloads to Microsoft Azure. The ideal candidate will possess a deep engineering mindset, combining exceptional architectural design capabilities with hands-on mastery of Infrastructure as Code (IaC), CI/CD pipelines, and cloud migration frameworks.',
    responsibilities: [
      'Cloud Architecture & Design: Design scalable, highly available, secure, and cost-optimized cloud solutions leveraging a wide array of core and advanced Azure services (e.g., Azure App Services, AKS, Azure SQL, Synapse, Virtual Networks, Application Gateways, and Azure Key Vault).',
      'Infrastructure as Code (IaC): Architect and implement cloud environments completely through code utilizing Azure Terraform and ARM templates, ensuring repeatable, secure, and standardized deployments across multi-tier environments.',
      'DevOps & CI/CD Automation: Define and optimize enterprise-grade CI/CD pipelines using Azure DevOps or GitHub Actions. Automate infrastructure provisioning, software configuration management, and application delivery workflows.',
      'On-Premise Migration: Lead the assessment, planning, and execution of migrating complex on-premise applications and workloads to Azure using tools like Azure Migrate, ensuring minimal business disruption and optimal post-migration performance.',
      'Management & Monitoring: Design and implement robust enterprise observability solutions using Azure Monitor, Log Analytics, and Application Insights. Establish proactively managed alerts, dashboards, and automated remediation scripts.',
      'Governance & Security: Implement and enforce cloud governance policies using Azure Policy, Role-Based Access Control (RBAC), and Azure Blueprints to ensure compliance with industry standards and enterprise security frameworks.',
    ],
  },
  {
    id: 12,
    title: 'Azure Solutions Architect',
    department: 'Cloud & DevOps',
    city: 'Sunnyvale',
    state: 'California',
    type: 'Full-time',
    level: 'Senior',
    experience: '10+ years',
    posted: 'August 25, 2026',
    description:
      'Design, automate, govern, and migrate robust enterprise workloads to Microsoft Azure using modern IaC and CI/CD practices.',
    summary:
      'We are seeking a highly skilled and seasoned Senior Azure Solutions Architect with a minimum of 10 years of experience in enterprise IT environments. In this role, you will design, automate, govern, and migrate robust enterprise workloads to Microsoft Azure. The ideal candidate will possess a deep engineering mindset, combining exceptional architectural design capabilities with hands-on mastery of Infrastructure as Code (IaC), CI/CD pipelines, and cloud migration frameworks.',
    responsibilities: [
      'Cloud Architecture & Design: Design scalable, highly available, secure, and cost-optimized cloud solutions leveraging a wide array of core and advanced Azure services (e.g., Azure App Services, AKS, Azure SQL, Synapse, Virtual Networks, Application Gateways, and Azure Key Vault).',
      'Infrastructure as Code (IaC): Architect and implement cloud environments completely through code utilizing Azure Terraform and ARM templates, ensuring repeatable, secure, and standardized deployments across multi-tier environments.',
      'DevOps & CI/CD Automation: Define and optimize enterprise-grade CI/CD pipelines using Azure DevOps or GitHub Actions. Automate infrastructure provisioning, software configuration management, and application delivery workflows.',
      'On-Premise Migration: Lead the assessment, planning, and execution of migrating complex on-premise applications and workloads to Azure using tools like Azure Migrate, ensuring minimal business disruption and optimal post-migration performance.',
      'Management & Monitoring: Design and implement robust enterprise observability solutions using Azure Monitor, Log Analytics, and Application Insights. Establish proactively managed alerts, dashboards, and automated remediation scripts.',
      'Governance & Security: Implement and enforce cloud governance policies using Azure Policy, Role-Based Access Control (RBAC), and Azure Blueprints to ensure compliance with industry standards and enterprise security frameworks.',
    ],
  },
  {
    id: 13,
    title: 'Azure Solutions Architect',
    department: 'Cloud & DevOps',
    city: 'Chicago',
    state: 'Illinois',
    type: 'Full-time',
    level: 'Senior',
    experience: '10+ years',
    posted: 'August 25, 2026',
    description:
      'Design, automate, govern, and migrate robust enterprise workloads to Microsoft Azure using modern IaC and CI/CD practices.',
    summary:
      'We are seeking a highly skilled and seasoned Senior Azure Solutions Architect with a minimum of 10 years of experience in enterprise IT environments. In this role, you will design, automate, govern, and migrate robust enterprise workloads to Microsoft Azure. The ideal candidate will possess a deep engineering mindset, combining exceptional architectural design capabilities with hands-on mastery of Infrastructure as Code (IaC), CI/CD pipelines, and cloud migration frameworks.',
    responsibilities: [
      'Cloud Architecture & Design: Design scalable, highly available, secure, and cost-optimized cloud solutions leveraging a wide array of core and advanced Azure services (e.g., Azure App Services, AKS, Azure SQL, Synapse, Virtual Networks, Application Gateways, and Azure Key Vault).',
      'Infrastructure as Code (IaC): Architect and implement cloud environments completely through code utilizing Azure Terraform and ARM templates, ensuring repeatable, secure, and standardized deployments across multi-tier environments.',
      'DevOps & CI/CD Automation: Define and optimize enterprise-grade CI/CD pipelines using Azure DevOps or GitHub Actions. Automate infrastructure provisioning, software configuration management, and application delivery workflows.',
      'On-Premise Migration: Lead the assessment, planning, and execution of migrating complex on-premise applications and workloads to Azure using tools like Azure Migrate, ensuring minimal business disruption and optimal post-migration performance.',
      'Management & Monitoring: Design and implement robust enterprise observability solutions using Azure Monitor, Log Analytics, and Application Insights. Establish proactively managed alerts, dashboards, and automated remediation scripts.',
      'Governance & Security: Implement and enforce cloud governance policies using Azure Policy, Role-Based Access Control (RBAC), and Azure Blueprints to ensure compliance with industry standards and enterprise security frameworks.',
    ],
  },
  {
    id: 4,
    title: 'Mainframe IMS Systems Programmer / DBA',
    department: 'Mainframe Engineering',
    city: 'Plano',
    state: 'Texas',
    type: 'Full-time',
    level: 'Senior',
    posted: 'August 15, 2026',
    description:
      'Manage, maintain, and optimize IBM z/OS mainframe environments, ensuring high availability, performance, and security of IMS DB and IMS TM subsystems.',
    summary:
      'We are seeking an experienced Mainframe IMS Systems Programmer / DBA to manage, maintain, and optimize our IBM z/OS mainframe environments. In this role, you will be responsible for ensuring the high availability, performance, and security of our IMS Database (IMS DB) and IMS Transaction Manager (IMS TM) subsystems. The ideal candidate will possess deep technical expertise in database administration, system tuning, troubleshooting, and integration with modern enterprise tools.',
    responsibilities: [
      'Subsystem Management: Install, configure, and maintain IMS DB and IMS TM subsystems on IBM z/OS platforms.',
      'Lifecycle & Maintenance: Perform version upgrades, routine maintenance, and security patching to guarantee system stability and currency.',
      'System Definitions: Manage and maintain IMS system definitions, including DBDs, PSBs, ACB libraries, and control regions.',
      'Performance Tuning: Configure and tune buffer pools, system parameters, and storage resources to ensure peak processing performance.',
      'Monitoring & Optimization: Monitor IMS database and transaction performance to proactively identify and resolve bottlenecks before they impact business operations.',
      'Incident & Problem Resolution: Troubleshoot complex system and database issues by analyzing system logs, dumps, abends, and error reports.',
      'Backup & Recovery: Support IMS utilities, implement robust backup/recovery strategies, and actively participate in disaster recovery (DR) planning and testing.',
      'Environment Integration: Coordinate seamless integration and communication between IMS and related environments, including z/OS, DB2, MQ, CICS, TCP/IP, and Parallel Sysplex.',
      'Change Management: Implement updates following established ITIL guidelines and use ServiceNow change management workflows to document system changes.',
      'Documentation: Create and maintain thorough, accurate technical documentation regarding configurations, architecture changes, and standard operating procedures.',
    ],
  },
  {
    id: 14,
    title: 'Mainframe IMS Systems Programmer / DBA',
    department: 'Mainframe Engineering',
    city: 'Pennington',
    state: 'New Jersey',
    type: 'Full-time',
    level: 'Senior',
    posted: 'August 15, 2026',
    description:
      'Manage, maintain, and optimize IBM z/OS mainframe environments, ensuring high availability, performance, and security of IMS DB and IMS TM subsystems.',
    summary:
      'We are seeking an experienced Mainframe IMS Systems Programmer / DBA to manage, maintain, and optimize our IBM z/OS mainframe environments. In this role, you will be responsible for ensuring the high availability, performance, and security of our IMS Database (IMS DB) and IMS Transaction Manager (IMS TM) subsystems. The ideal candidate will possess deep technical expertise in database administration, system tuning, troubleshooting, and integration with modern enterprise tools.',
    responsibilities: [
      'Subsystem Management: Install, configure, and maintain IMS DB and IMS TM subsystems on IBM z/OS platforms.',
      'Lifecycle & Maintenance: Perform version upgrades, routine maintenance, and security patching to guarantee system stability and currency.',
      'System Definitions: Manage and maintain IMS system definitions, including DBDs, PSBs, ACB libraries, and control regions.',
      'Performance Tuning: Configure and tune buffer pools, system parameters, and storage resources to ensure peak processing performance.',
      'Monitoring & Optimization: Monitor IMS database and transaction performance to proactively identify and resolve bottlenecks before they impact business operations.',
      'Incident & Problem Resolution: Troubleshoot complex system and database issues by analyzing system logs, dumps, abends, and error reports.',
      'Backup & Recovery: Support IMS utilities, implement robust backup/recovery strategies, and actively participate in disaster recovery (DR) planning and testing.',
      'Environment Integration: Coordinate seamless integration and communication between IMS and related environments, including z/OS, DB2, MQ, CICS, TCP/IP, and Parallel Sysplex.',
      'Change Management: Implement updates following established ITIL guidelines and use ServiceNow change management workflows to document system changes.',
      'Documentation: Create and maintain thorough, accurate technical documentation regarding configurations, architecture changes, and standard operating procedures.',
    ],
  },
  {
    id: 15,
    title: 'Mainframe IMS Systems Programmer / DBA',
    department: 'Mainframe Engineering',
    city: 'Phoenix',
    state: 'Arizona',
    type: 'Full-time',
    level: 'Senior',
    posted: 'August 15, 2026',
    description:
      'Manage, maintain, and optimize IBM z/OS mainframe environments, ensuring high availability, performance, and security of IMS DB and IMS TM subsystems.',
    summary:
      'We are seeking an experienced Mainframe IMS Systems Programmer / DBA to manage, maintain, and optimize our IBM z/OS mainframe environments. In this role, you will be responsible for ensuring the high availability, performance, and security of our IMS Database (IMS DB) and IMS Transaction Manager (IMS TM) subsystems. The ideal candidate will possess deep technical expertise in database administration, system tuning, troubleshooting, and integration with modern enterprise tools.',
    responsibilities: [
      'Subsystem Management: Install, configure, and maintain IMS DB and IMS TM subsystems on IBM z/OS platforms.',
      'Lifecycle & Maintenance: Perform version upgrades, routine maintenance, and security patching to guarantee system stability and currency.',
      'System Definitions: Manage and maintain IMS system definitions, including DBDs, PSBs, ACB libraries, and control regions.',
      'Performance Tuning: Configure and tune buffer pools, system parameters, and storage resources to ensure peak processing performance.',
      'Monitoring & Optimization: Monitor IMS database and transaction performance to proactively identify and resolve bottlenecks before they impact business operations.',
      'Incident & Problem Resolution: Troubleshoot complex system and database issues by analyzing system logs, dumps, abends, and error reports.',
      'Backup & Recovery: Support IMS utilities, implement robust backup/recovery strategies, and actively participate in disaster recovery (DR) planning and testing.',
      'Environment Integration: Coordinate seamless integration and communication between IMS and related environments, including z/OS, DB2, MQ, CICS, TCP/IP, and Parallel Sysplex.',
      'Change Management: Implement updates following established ITIL guidelines and use ServiceNow change management workflows to document system changes.',
      'Documentation: Create and maintain thorough, accurate technical documentation regarding configurations, architecture changes, and standard operating procedures.',
    ],
  },
  {
    id: 16,
    title: 'Mainframe IMS Systems Programmer / DBA',
    department: 'Mainframe Engineering',
    city: 'Charlotte',
    state: 'North Carolina',
    type: 'Full-time',
    level: 'Senior',
    posted: 'August 15, 2026',
    description:
      'Manage, maintain, and optimize IBM z/OS mainframe environments, ensuring high availability, performance, and security of IMS DB and IMS TM subsystems.',
    summary:
      'We are seeking an experienced Mainframe IMS Systems Programmer / DBA to manage, maintain, and optimize our IBM z/OS mainframe environments. In this role, you will be responsible for ensuring the high availability, performance, and security of our IMS Database (IMS DB) and IMS Transaction Manager (IMS TM) subsystems. The ideal candidate will possess deep technical expertise in database administration, system tuning, troubleshooting, and integration with modern enterprise tools.',
    responsibilities: [
      'Subsystem Management: Install, configure, and maintain IMS DB and IMS TM subsystems on IBM z/OS platforms.',
      'Lifecycle & Maintenance: Perform version upgrades, routine maintenance, and security patching to guarantee system stability and currency.',
      'System Definitions: Manage and maintain IMS system definitions, including DBDs, PSBs, ACB libraries, and control regions.',
      'Performance Tuning: Configure and tune buffer pools, system parameters, and storage resources to ensure peak processing performance.',
      'Monitoring & Optimization: Monitor IMS database and transaction performance to proactively identify and resolve bottlenecks before they impact business operations.',
      'Incident & Problem Resolution: Troubleshoot complex system and database issues by analyzing system logs, dumps, abends, and error reports.',
      'Backup & Recovery: Support IMS utilities, implement robust backup/recovery strategies, and actively participate in disaster recovery (DR) planning and testing.',
      'Environment Integration: Coordinate seamless integration and communication between IMS and related environments, including z/OS, DB2, MQ, CICS, TCP/IP, and Parallel Sysplex.',
      'Change Management: Implement updates following established ITIL guidelines and use ServiceNow change management workflows to document system changes.',
      'Documentation: Create and maintain thorough, accurate technical documentation regarding configurations, architecture changes, and standard operating procedures.',
    ],
  },
  {
    id: 17,
    title: 'Mainframe IMS Systems Programmer / DBA',
    department: 'Mainframe Engineering',
    city: 'Chicago',
    state: 'Illinois',
    type: 'Full-time',
    level: 'Senior',
    posted: 'August 15, 2026',
    description:
      'Manage, maintain, and optimize IBM z/OS mainframe environments, ensuring high availability, performance, and security of IMS DB and IMS TM subsystems.',
    summary:
      'We are seeking an experienced Mainframe IMS Systems Programmer / DBA to manage, maintain, and optimize our IBM z/OS mainframe environments. In this role, you will be responsible for ensuring the high availability, performance, and security of our IMS Database (IMS DB) and IMS Transaction Manager (IMS TM) subsystems. The ideal candidate will possess deep technical expertise in database administration, system tuning, troubleshooting, and integration with modern enterprise tools.',
    responsibilities: [
      'Subsystem Management: Install, configure, and maintain IMS DB and IMS TM subsystems on IBM z/OS platforms.',
      'Lifecycle & Maintenance: Perform version upgrades, routine maintenance, and security patching to guarantee system stability and currency.',
      'System Definitions: Manage and maintain IMS system definitions, including DBDs, PSBs, ACB libraries, and control regions.',
      'Performance Tuning: Configure and tune buffer pools, system parameters, and storage resources to ensure peak processing performance.',
      'Monitoring & Optimization: Monitor IMS database and transaction performance to proactively identify and resolve bottlenecks before they impact business operations.',
      'Incident & Problem Resolution: Troubleshoot complex system and database issues by analyzing system logs, dumps, abends, and error reports.',
      'Backup & Recovery: Support IMS utilities, implement robust backup/recovery strategies, and actively participate in disaster recovery (DR) planning and testing.',
      'Environment Integration: Coordinate seamless integration and communication between IMS and related environments, including z/OS, DB2, MQ, CICS, TCP/IP, and Parallel Sysplex.',
      'Change Management: Implement updates following established ITIL guidelines and use ServiceNow change management workflows to document system changes.',
      'Documentation: Create and maintain thorough, accurate technical documentation regarding configurations, architecture changes, and standard operating procedures.',
    ],
  },
  {
    id: 18,
    title: 'Mainframe IMS Systems Programmer / DBA',
    department: 'Mainframe Engineering',
    city: 'Jacksonville',
    state: 'Florida',
    type: 'Full-time',
    level: 'Senior',
    posted: 'August 15, 2026',
    description:
      'Manage, maintain, and optimize IBM z/OS mainframe environments, ensuring high availability, performance, and security of IMS DB and IMS TM subsystems.',
    summary:
      'We are seeking an experienced Mainframe IMS Systems Programmer / DBA to manage, maintain, and optimize our IBM z/OS mainframe environments. In this role, you will be responsible for ensuring the high availability, performance, and security of our IMS Database (IMS DB) and IMS Transaction Manager (IMS TM) subsystems. The ideal candidate will possess deep technical expertise in database administration, system tuning, troubleshooting, and integration with modern enterprise tools.',
    responsibilities: [
      'Subsystem Management: Install, configure, and maintain IMS DB and IMS TM subsystems on IBM z/OS platforms.',
      'Lifecycle & Maintenance: Perform version upgrades, routine maintenance, and security patching to guarantee system stability and currency.',
      'System Definitions: Manage and maintain IMS system definitions, including DBDs, PSBs, ACB libraries, and control regions.',
      'Performance Tuning: Configure and tune buffer pools, system parameters, and storage resources to ensure peak processing performance.',
      'Monitoring & Optimization: Monitor IMS database and transaction performance to proactively identify and resolve bottlenecks before they impact business operations.',
      'Incident & Problem Resolution: Troubleshoot complex system and database issues by analyzing system logs, dumps, abends, and error reports.',
      'Backup & Recovery: Support IMS utilities, implement robust backup/recovery strategies, and actively participate in disaster recovery (DR) planning and testing.',
      'Environment Integration: Coordinate seamless integration and communication between IMS and related environments, including z/OS, DB2, MQ, CICS, TCP/IP, and Parallel Sysplex.',
      'Change Management: Implement updates following established ITIL guidelines and use ServiceNow change management workflows to document system changes.',
      'Documentation: Create and maintain thorough, accurate technical documentation regarding configurations, architecture changes, and standard operating procedures.',
    ],
  },
];

const PERKS = [
  { icon: <TrendingUpIcon />, title: 'Career Growth', text: 'Mentorship, training, and clear paths to advance.' },
  { icon: <HomeWorkIcon />, title: 'Flexible & Remote', text: 'Hybrid and remote options across many roles.' },
  { icon: <FavoriteIcon />, title: 'Health & Wellness', text: 'Comprehensive medical, dental, and vision coverage.' },
  { icon: <GroupsIcon />, title: 'Collaborative Culture', text: 'Work alongside a supportive, close-knit team.' },
];

function Careers() {
  useEffect(() => {
    emailjs.init('FWnok6harYNe5Qo63');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [detailsJob, setDetailsJob] = useState(null);
  const [applicationData, setApplicationData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const states = useMemo(
    () => Array.from(new Set(JOBS.map((job) => job.state))).sort((a, b) => a.localeCompare(b)),
    []
  );
  const departments = useMemo(
    () => Array.from(new Set(JOBS.map((job) => job.department))).sort((a, b) => a.localeCompare(b)),
    []
  );

  const filteredJobs = JOBS.filter((job) => {
    const matchesState = stateFilter === 'All' || job.state === stateFilter;
    const matchesDepartment = departmentFilter === 'All' || job.department === departmentFilter;
    const matchesSearch =
      searchTerm.trim() === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesDepartment && matchesSearch;
  });

  const handleClearFilters = () => {
    setSearchTerm('');
    setStateFilter('All');
    setDepartmentFilter('All');
  };

  const handleOpenApply = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setApplicationData({ name: '', email: '', phone: '', message: '' });
  };

  const handleCloseApply = () => {
    setSelectedJob(null);
  };

  const handleOpenDetails = (job) => {
    setDetailsJob(job);
  };

  const handleCloseDetails = () => {
    setDetailsJob(null);
  };

  const handleApplyFromDetails = () => {
    const job = detailsJob;
    setDetailsJob(null);
    handleOpenApply(job);
  };

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const templateParams = {
      to_email: 'careers@iconnectdynamics.com',
      from_name: applicationData.name,
      from_email: applicationData.email,
      phone: applicationData.phone,
      subject: `Job Application: ${selectedJob.title} (${selectedJob.city}, ${selectedJob.state})`,
      message: applicationData.message,
    };

    emailjs
      .send('service_r1j8km2', 'template_2yszjip', templateParams)
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error('Application send failed:', error);
        setSubmitting(false);
        alert('We could not submit your application. Please try again later.');
      });
  };

  return (
    <div className="careers">
      <div className="page-header">
        <h1>Careers</h1>
        <p>Build your future with iConnect Dynamics</p>
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
          We're always looking for talented, driven people to join our team. Explore our current
          openings below and find the role that's right for you, wherever you are in the country.
        </Typography>

        {/* Perks strip */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {PERKS.map((perk) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={perk.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#0f4c7e',
                    boxShadow: '0 4px 16px rgba(15, 76, 126, 0.12)',
                  },
                }}
              >
                <Box sx={{ color: '#0f4c7e', fontSize: '2rem', mb: 1 }}>{perk.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: '700', color: '#1a2a4e', mb: 0.5 }}>
                  {perk.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {perk.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Filters */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <TextField
                fullWidth
                placeholder="Search by title or department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#0f4c7e' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="state-filter-label">State</InputLabel>
                <Select
                  labelId="state-filter-label"
                  label="State"
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                >
                  <MenuItem value="All">All States</MenuItem>
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="department-filter-label">Department</InputLabel>
                <Select
                  labelId="department-filter-label"
                  label="Department"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  <MenuItem value="All">All Departments</MenuItem>
                  {departments.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 1 }}>
              <Button
                fullWidth
                onClick={handleClearFilters}
                sx={{ color: '#0f4c7e', fontWeight: '600', whiteSpace: 'nowrap' }}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
          Showing {filteredJobs.length} of {JOBS.length} open positions
        </Typography>

        {/* Job listings */}
        {filteredJobs.length > 0 ? (
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {filteredJobs.map((job) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={job.id}>
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
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        icon={<BusinessCenterIcon />}
                        label={job.department}
                        size="small"
                        sx={{ backgroundColor: '#0f4c7e', color: '#ffffff', fontWeight: '600' }}
                      />
                      <Chip
                        icon={<AccessTimeIcon />}
                        label={job.type}
                        size="small"
                        sx={{ backgroundColor: '#4db8ff', color: '#1a2a4e', fontWeight: '600' }}
                      />
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: '700', color: '#1a2a4e', mb: 1.5 }}>
                      {job.title}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mb: 1,
                        fontSize: '0.9rem',
                        color: '#666',
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: '1.1rem' }} />
                      {job.city}, {job.state}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mb: 2,
                        fontSize: '0.85rem',
                        color: '#999',
                      }}
                    >
                      <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                      Posted {job.posted} · {job.level}
                    </Box>

                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6, flexGrow: 1 }}>
                      {job.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ pt: 0, gap: 1 }}>
                    <Button
                      variant="outlined"
                      startIcon={<DescriptionOutlinedIcon />}
                      onClick={() => handleOpenDetails(job)}
                      sx={{
                        borderColor: '#0f4c7e',
                        color: '#0f4c7e',
                        fontWeight: '600',
                        flex: 1,
                        '&:hover': { borderColor: '#1a2a4e', backgroundColor: 'rgba(15, 76, 126, 0.05)' },
                      }}
                    >
                      Details
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<WorkOutlineIcon />}
                      onClick={() => handleOpenApply(job)}
                      sx={{
                        backgroundColor: '#0f4c7e',
                        color: '#ffffff',
                        fontWeight: '600',
                        flex: 1,
                        '&:hover': { backgroundColor: '#1a2a4e' },
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper
            elevation={0}
            sx={{ p: 5, textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '8px', mb: 4 }}
          >
            <Typography variant="h6" sx={{ color: '#1a2a4e', fontWeight: '700', mb: 1 }}>
              No openings match your filters
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
              Try a different state or department, or clear your filters to see all positions.
            </Typography>
            <Button
              onClick={handleClearFilters}
              variant="outlined"
              sx={{ borderColor: '#0f4c7e', color: '#0f4c7e', fontWeight: '600' }}
            >
              Clear Filters
            </Button>
          </Paper>
        )}

        {/* General application CTA */}
        <Paper
          sx={{
            backgroundColor: '#1a2a4e',
            color: '#ffffff',
            p: 4,
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '700', mb: 1 }}>
            Don't See the Right Fit?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            We're always interested in meeting talented people. Send us your resume and we'll reach
            out when a matching role opens up.
          </Typography>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            onClick={() => handleOpenApply({ title: 'General Application', city: '', state: '' })}
            sx={{
              backgroundColor: '#4db8ff',
              color: '#1a2a4e',
              fontWeight: '700',
              '&:hover': { backgroundColor: '#3aa5e8' },
            }}
          >
            Submit General Application
          </Button>
        </Paper>
      </Container>

      {/* Job Details Dialog */}
      <Dialog open={Boolean(detailsJob)} onClose={handleCloseDetails} fullWidth maxWidth="md">
        {detailsJob && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: '700', color: '#1a2a4e' }}>
                  {detailsJob.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                  <Chip
                    icon={<BusinessCenterIcon />}
                    label={detailsJob.department}
                    size="small"
                    sx={{ backgroundColor: '#0f4c7e', color: '#ffffff', fontWeight: '600' }}
                  />
                  <Chip
                    icon={<AccessTimeIcon />}
                    label={detailsJob.type}
                    size="small"
                    sx={{ backgroundColor: '#4db8ff', color: '#1a2a4e', fontWeight: '600' }}
                  />
                  <Chip
                    icon={<LocationOnIcon />}
                    label={`${detailsJob.city}, ${detailsJob.state}`}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: '#0f4c7e', color: '#0f4c7e', fontWeight: '600' }}
                  />
                  {detailsJob.experience && (
                    <Chip
                      label={detailsJob.experience}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: '#0f4c7e', color: '#0f4c7e', fontWeight: '600' }}
                    />
                  )}
                </Box>
              </Box>
              <IconButton onClick={handleCloseDetails} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="subtitle1" sx={{ fontWeight: '700', color: '#1a2a4e', mb: 1 }}>
                Position Summary
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.8, mb: 3, textAlign: 'justify' }}>
                {detailsJob.summary || detailsJob.description}
              </Typography>

              {detailsJob.responsibilities && detailsJob.responsibilities.length > 0 && (
                <>
                  <Typography variant="subtitle1" sx={{ fontWeight: '700', color: '#1a2a4e', mb: 1 }}>
                    Key Responsibilities
                  </Typography>
                  <List sx={{ py: 0 }}>
                    {detailsJob.responsibilities.map((item, index) => (
                      <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0.75, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: '32px', mt: '2px' }}>
                          <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#0f4c7e' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          slotProps={{ primary: { sx: { color: '#666', lineHeight: 1.6 } } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button onClick={handleCloseDetails} sx={{ color: '#666' }}>
                Close
              </Button>
              <Button
                variant="contained"
                startIcon={<WorkOutlineIcon />}
                onClick={handleApplyFromDetails}
                sx={{
                  backgroundColor: '#0f4c7e',
                  fontWeight: '600',
                  '&:hover': { backgroundColor: '#1a2a4e' },
                }}
              >
                Apply Now
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Application Dialog */}
      <Dialog open={Boolean(selectedJob)} onClose={handleCloseApply} fullWidth maxWidth="sm">
        {selectedJob && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: '700', color: '#1a2a4e' }}>
                  Apply for {selectedJob.title}
                </Typography>
                {selectedJob.city && (
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {selectedJob.city}, {selectedJob.state}
                  </Typography>
                )}
              </Box>
              <IconButton onClick={handleCloseApply} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Box component="form" onSubmit={handleSubmitApplication}>
              <DialogContent dividers>
                {submitted ? (
                  <Typography sx={{ color: '#0f4c7e', fontWeight: '600', textAlign: 'center', py: 2 }}>
                    ✓ Thank you! Your application has been submitted. Our team will be in touch soon.
                  </Typography>
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={applicationData.name}
                      onChange={handleApplicationChange}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={applicationData.email}
                      onChange={handleApplicationChange}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={handleApplicationChange}
                      fullWidth
                    />
                    <TextField
                      label="Tell us about yourself"
                      name="message"
                      value={applicationData.message}
                      onChange={handleApplicationChange}
                      multiline
                      rows={4}
                      required
                      fullWidth
                    />
                  </Box>
                )}
              </DialogContent>
              {!submitted && (
                <DialogActions sx={{ p: 2 }}>
                  <Button onClick={handleCloseApply} sx={{ color: '#666' }}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={submitting}
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: '#0f4c7e',
                      fontWeight: '600',
                      '&:hover': { backgroundColor: '#1a2a4e' },
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </DialogActions>
              )}
            </Box>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Careers;
