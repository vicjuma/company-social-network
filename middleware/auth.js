const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {

    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }

  jwt.verify(token, 'mynameisvictorjuma', (err, auth) => {
    if (err) {
      throw new Error('Forbidden');
    } else {
      res.send('auth successful')
    }
  });
}