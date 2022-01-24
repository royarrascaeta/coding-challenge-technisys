import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginScreen from './pages/LoginScreen/LoginScreen';
import LostPasswordScreen from './pages/LostPasswordScreen/LostPasswordScreen';

import 'animate.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ <LoginScreen /> } />
          <Route exact path="/lostpassword" element={ <LostPasswordScreen /> } />
          <Route path="*" element={ <LoginScreen /> } />
        </Routes>
      </Router>
    </>
  );
};

export default App;
