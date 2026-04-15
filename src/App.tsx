/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import GiroPizza from './pages/GiroPizza';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <Router> 
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/giro-pizza" element={<GiroPizza />} />
          <Route path="/eventi" element={<Events />} />
          <Route path="/galleria" element={<Gallery />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
