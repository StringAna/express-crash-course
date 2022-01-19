const moment = require('moment');

//for middleware. Everytime we make a req, this middleware will run
const logger = (req, res, next) => {
  //log the url that is hit with the date
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }:${moment().format()}`
  );

  //call next last so that we can move to the next middleware function in the stack
  next();
};

module.exports = logger;
