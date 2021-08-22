var express = require('express');
const {User} = require('../models/user');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World');
})

router.get('/getUser', async function (req, res) {
  const user = await User.findOne({
    email: 'test@gmail.com'
  })

  res.json(user);
})

router.post('/create', async function (req, res) {
  const user = await User.create({
    name: 'Gowtham',
    email: 'test@gmail.com'
  })

  console.log('User Created');

  res.send('User Created');
})

module.exports = router;
