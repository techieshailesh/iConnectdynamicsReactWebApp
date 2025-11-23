import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ITServices from './pages/ITServices';
import Insights from './pages/Insights';
import Blogs from './pages/Blogs';
import Connect from './pages/Connect';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
