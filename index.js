const express = require('express');
const { param } = require('express/lib/request');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

//to initialize the middleware
// app.use(logger);

//gets all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

//get single member
app.get('/api/members/:id', (req, res) => {
  //to deal with members that don't exist
  const found = members.some((mem) => mem.id === parseInt(req.params.id));

  // === : data type has to match on both sides
  // parseInt to convert id to int
  if (found) {
    res.json(members.filter((mem) => mem.id === parseInt(req.params.id)));
  } else {
    //http-status 400 : bad req
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
