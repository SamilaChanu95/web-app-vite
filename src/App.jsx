import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import {  Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default App;
