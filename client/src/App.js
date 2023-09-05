import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import About from './pages/about';
import Answer from './pages/answer';
import Navbar from './components/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
    <Route path='/about' element={<About/>} />
    <Route path='/answer' element={<Answer />} />
    </Routes>
    </Router>
  );
}

export default App;
