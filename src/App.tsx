import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.css';
import TypingEmblem from './components/TypingEmblem';
import CubeBackground from './components/CubeBackground';
import RouteTransition from './components/RouteTransition';

const App: React.FC = () => {
  return (
      <Router basename="/">
        <CubeBackground />
        <Navbar />
        <TypingEmblem />
        <div className="main-content">
          <RouteTransition />
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
