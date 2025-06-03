const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/signup', (req, res) => {
  const { name, username, pass } = req.body;

  const newUser = { name, username, pass };

  
  fs.readFile('users.json', 'utf8', (err, data) => {
    let users = [];

    if (!err && data) {
      try {
        users = JSON.parse(data);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
      }
    }

    users.push(newUser);

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(200).json({ message: 'User signed up successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/login', (req, res) => {
  const { username, pass } = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err || !data) {
      return res.status(500).json({ message: 'Error reading user data' });
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      return res.status(500).json({ message: 'Error parsing user data' });
    }

    const user = users.find(u => u.username === username && u.pass === pass);

    if (user) {
      res.status(200).json({ message: 'Login successful', name: user.name });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

