import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import Createjob from './components/createjob/Createjob';
import TechStack from './components/TechStack';
import MyJob from './components/myJob/MyJob';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/myjob' element={<MyJob/>} />
      <Route path='/createjob' element={<Createjob/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
