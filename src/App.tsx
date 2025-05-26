import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VcapPage from './pages/VcapPage';
import FaqPage from './pages/FaqPage';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vcap" element={<VcapPage />} />
        <Route path="/FAQ" element={<FaqPage />} />
      </Routes>
    </Router>
  );
}

export default App;
