const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const pool = new Pool({
  user: 'Oluoch',
  host: 'localhost',
  database: 'teamwork',
  password: 'jumavic@9118',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.log(`could not connect to ${client}`, err);
  process.exit(-1);
});

exports.createEmployee = (req, res) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds).then((hash) => {
    const {
      firstName,
      lastName,
      email,
      gender,
      jobRole,
      department,
      address,
    } = req.body;
    pool
      .connect()
      .then((client) => client
        .query('INSERT INTO teamwork.employee ("firstName", "lastName", "email", "password", "gender", "jobRole", "department", "address") VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [firstName, lastName, email, hash, gender, jobRole, department, address])
        .then((result) => {
          client.release();
          console.log('employees created successfully');
          res.status(200).json({ message: 'employee posted successfully', result });
        })
        .catch((err) => {
          client.release();
          console.log(err.stack);
        }));
  });
};

exports.signInEmployee = (req, res) => {
  const token = jwt.sign({ username: 'email', password: 'pass', employeeID: 1 }, 'mynameisvictorjuma');
  res.status(200).send(token);
};
