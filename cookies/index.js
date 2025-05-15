const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Corrected the package name

app.use(cookieParser()); // Apply the middleware

// Route to set a cookie
app.get('/', function (req, res) {
  res.cookie('name', 'xyz'); // Correct way to set a cookie
  res.send('Cookie has been set');
});

// Route to read cookies
app.get('/read', function (req, res) {
  const cookies = req.cookies;
  res.send(cookies);
  console.log(cookies)
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
