import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import  MoreInfo from "./components/moreInfo"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className="main-container">
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/moreinfo" element={<MoreInfo />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
