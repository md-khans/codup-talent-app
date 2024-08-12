import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Createjob from "./components/createjob/Createjob";
import MyJob from "./components/myJob/MyJob";
import Details from "./details/Details";
import Login from "./components/login-page/Login";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
  const location = useLocation();
  const shouldShowNavbar = [
    "/dashboard",
    "/profile",
    "/myjob",
    "/createjob",
    "/details",
  ].includes(location.pathname);

  return (
    
    <div>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/myjob' element={<MyJob />} />
        <Route path='/createjob' element={<Createjob />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
