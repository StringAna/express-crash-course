const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  //   res.send('<h1>Hello from express</h1>');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//to run the web server on a port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
