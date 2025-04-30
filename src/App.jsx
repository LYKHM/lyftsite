import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Policy from './policy';
import Terms from './terms';
import Home from './home';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  </Router>
  );
}

export default App;