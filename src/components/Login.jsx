import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      console.log('username and password:', username, password);
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center max-h-svh'>
      <img src="/src/assets/dashboard_image.jpg" alt="Fullscreen Background" className='rounded-sm'/>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 absolute'>
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col col-span-5 space-y-4">
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-zinc-700 border-1 rounded-sm p-2 w-80"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-zinc-700 border-1 rounded-sm p-2 w-80"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;