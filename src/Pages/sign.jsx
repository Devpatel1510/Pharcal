import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Sign = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { name, username, pass };

    const res = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <span>
            Name:
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name" 
            />
          </span>
          <span>
            Username:
            <input 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username" 
              type="text"
            />
          </span>
          <span>
            Password:
            <input 
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password" 
              type="password"
            />
          </span>

          <button type="submit">Sign Up</button>
          <br></br>
          <Link to="/login">already have an account?</Link>
        </form>
      </div>
    </main>
  );
};

export default Sign;
