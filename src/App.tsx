import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './styles/global'

import Login from './pages/Login';

import Home from './pages/Home';

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <GlobalStyles/> */}
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
      <GlobalStyles/>
    </Provider>
  );
}

export default App;
