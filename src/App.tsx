import React from 'react';
import './App.css';
import AuthState from './context/AuthContext/AuthState';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Invoice from './pages/Invoice/Invoice';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <AuthState>
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
    <Route path="/invoice" element={<Invoice />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </AuthState>
  );
  ;
}

export default App;
