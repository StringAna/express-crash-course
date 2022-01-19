const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members');

// app.get('/', (req, res) => {
//   res.send('<h1>Hello from express</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//gets all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
