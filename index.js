const express = require('express');
const { param } = require('express/lib/request');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const app = express();

//to initialize the middleware
// app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//homepage route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members,
  })
);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//from members.js,members api routes
app.use('/api/members', require('./routes/api/members'));

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
