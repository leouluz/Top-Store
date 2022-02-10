import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
