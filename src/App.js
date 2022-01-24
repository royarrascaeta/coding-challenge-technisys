import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginScreen from './pages/LoginScreen/LoginScreen';
import LostPasswordScreen from './pages/LostPasswordScreen/LostPasswordScreen';

import { AppContext } from './context/appContext';

import 'animate.css';

const App = () => {

  const [loader, setLoader] = useState(false);

  return (
    <>
      <AppContext.Provider value={ [loader, setLoader] }>
        <Router>
          <Routes>
            <Route exact path="/" element={ <LoginScreen /> } />
            <Route exact path="/lostpassword" element={ <LostPasswordScreen /> } />
            <Route path="*" element={ <LoginScreen /> } />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
