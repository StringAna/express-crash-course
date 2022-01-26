const express = require('express');
const { param } = require('express/lib/request');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//to initialize the middleware
// app.use(logger);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//from members.js,members api routes
app.use('/api/members', require('./routes/api/members'));

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
