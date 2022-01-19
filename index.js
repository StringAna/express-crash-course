const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

//to initialize the middleware
app.use(logger);

//gets all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
