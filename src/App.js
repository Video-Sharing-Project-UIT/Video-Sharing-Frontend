import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import UploadVideo from './pages/UploadVideo';
import Home from './pages/Home';
import Profile from './pages/Profile';
import React, { useEffect } from 'react';
import Main from './pages/Main';
function App() {
  useEffect(() => {
    document.title = "Video sharing";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
    );
}


export default App;
