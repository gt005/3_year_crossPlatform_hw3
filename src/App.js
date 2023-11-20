import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/AuthorizationSystem/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
