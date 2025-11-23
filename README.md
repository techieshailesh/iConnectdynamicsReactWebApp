# iConnect Dynamics React Web App

A modern, responsive React website for iConnect Dynamics featuring multiple pages and sections.

## Features

- **Home Page** - Welcome page with key features and value propositions
- **About Us** - Company information, mission, values, and reasons to partner
- **IT Services** - Comprehensive listing of IT services offered
- **Insights** - Industry insights and trends with newsletter subscription
- **Blogs** - Blog articles and tutorials from experts
- **Contact Us** - Contact form and company information

## Technology Stack

- React 18
- React Router v6
- CSS3 (with responsive design)
- JavaScript ES6+

## Project Structure

```
src/
├── components/
│   ├── Navigation.js
│   ├── Navigation.css
│   ├── Footer.js
│   └── Footer.css
├── pages/
│   ├── Home.js
│   ├── Home.css
│   ├── AboutUs.js
│   ├── AboutUs.css
│   ├── ITServices.js
│   ├── ITServices.css
│   ├── Insights.js
│   ├── Insights.css
│   ├── Blogs.js
│   ├── Blogs.css
│   ├── ContactUs.js
│   └── ContactUs.css
├── App.js
├── App.css
├── index.js
└── index.css
public/
└── index.html
```

## Installation

1. Navigate to the project directory:

```bash
cd iConnectdynamicsReactWebApp
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will open at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm build
```

## Pages

### Home

Landing page with hero section and key features

### About Us

Company story, mission, values, and partnership benefits

### IT Services

Six main service categories:

- Cloud Solutions
- Custom Software Development
- Cybersecurity
- IT Consulting
- Managed IT Services
- Mobile App Development

### Insights

Industry insights and trends with email subscription

### Blogs

Blog articles with categories, dates, and read time estimates

### Contact Us

Contact form with company information and business hours

## Responsive Design

All pages are fully responsive and work seamlessly on:

- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

## Styling

The application uses a modern color scheme:

- Primary Color: #007bff (Blue)
- Dark Background: #1a1a1a
- Accent Gradient: #667eea to #764ba2

## License

MIT License - See LICENSE file for details
