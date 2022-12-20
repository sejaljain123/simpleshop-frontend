import React from 'react';
import './App.css';
import AuthState from './context/AuthContext/AuthState';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Invoice from './pages/Invoice/Invoice';

function App() {
  return (
    <AuthState>
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
    <Route path="/invoice" element={<Invoice />} />
    </Routes>
    </AuthState>
  );
  ;
}

export default App;
