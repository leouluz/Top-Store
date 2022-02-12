import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GlobalStyles from './styles/global'

import Login from './pages/Login';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <GlobalStyles/> */}
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
      <GlobalStyles/>
    </>
  );
}

export default App;
