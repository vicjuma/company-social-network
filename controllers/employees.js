const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

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

exports.createEmployee = () => {
  pool
    .connect()
    .then((client) => client
      .query('SELECT * FROM teamwork.employees', [1])
      .then((res) => {
        client.release();
        console.log(res.rows[0]);
      })
      .catch((err) => {
        client.release();
        console.log(err.stack);
      }));
};

exports.signInEmployee = (req, res) => {
  const token = jwt.sign({ username: 'email', password: 'pass', employeeID: 1 }, 'mynameisvictorjuma');
  res.status(200).send(token);
};
