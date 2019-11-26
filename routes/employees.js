const express = require('express');
const empctr = require('./../controllers/employees');

const router = express.Router();

router.post('/create-user', empctr.createEmployee);

module.exports = router;
