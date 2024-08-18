import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import {Homepage} from './components/Homepage'; // Ensure the correct import
import SignUp from './components/SignUp'; // Ensure the correct import
import './index.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route exact path="/" element={<Login />} />

        {/* Route for the homepage */}
        <Route exact path="/homepage" element={<Homepage />} />

        {/* Route for the signup page */}
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
