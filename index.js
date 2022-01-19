const express = require('express');
const path = require('path');
const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Hello from express</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//create object, send it as response in json format
//hit it with postman
const members = [
  {
    id: 1,
    name: 'john doe',
    email: 'john@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'cena doe',
    email: 'cena@gmail.com',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'pena poe',
    email: 'pena@gmail.com',
    status: 'inactive',
  },
];

//gets all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
