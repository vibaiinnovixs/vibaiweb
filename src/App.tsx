import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import VcapPage from './pages/VcapPage';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} /> 
        <Route path="/vcap" element={<VcapPage />} />        
      </Routes>
    </Router>
  );
}

export default App;
