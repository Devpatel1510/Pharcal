import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, pass }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`Welcome, ${data.name}!`);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        /><br/>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
};

export default Login;
