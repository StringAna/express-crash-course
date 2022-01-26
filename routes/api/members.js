const members = require('../../Members');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
//gets all members
router.get('/', (req, res) => {
  res.json(members);
});

//get single member
router.get('/:id', (req, res) => {
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

//create a member - POST request
router.post('/', (req, res) => {
  //send data, and when we get data, it should be in the req object
  // res.send(req.body);

  //creating a new member
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };
  //add this new member to an array,make sure that name and email are sent with the request
  if (!newMember.name || !newMember.email) {
    //bad request 400
    return res.status(400).json({ msg: 'please include a name and email' });
  }
  members.push(newMember);
  //respond with array of memebers including new member
  res.json(members);
});

module.exports = router;
