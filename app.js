const express = require('express');
const bodyParser = require('body-parser');
const empRoute = require('./routes/employees');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', empRoute);

module.exports = app;
