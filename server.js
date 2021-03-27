'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.urlencoded({ extended: false })); // for parsing html form x-www-form-urlencoded
// and/or app.use(express.json()); // for parsing application/json
app.use('/cat', require('./route'));

app.get('/', (req, res) => {
  console.log('get/');
  res.send('Hello to demo node and mongo, try/cath route');
});

db.on('connected', () => {
  app.listen(3000, () => {
    console.log('express server started on port 3000');
  });
});
