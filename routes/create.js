const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
module.exports = (db) => {
  router.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;
    db.query(
      `SELECT * FROM users
              WHERE email = $1;`,
      [email]
    ).then((data) => {
      if (data.rows[0] !== undefined) {
        return res.send('exists');
      }
      if (password !== password2) {
        return res.send('mismatch');
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const queryParams = [firstName, lastName, email, hashedPassword];

      db.query(
        `INSERT INTO users (firstName, lastName, email, password)
              VALUES ($1, $2, $3, $4)
              RETURNING *;`,
        queryParams
      )
        .then((data) => {
          const listing = data.rows[0];
          return res.send(listing);
        })
        .catch((err) => {
          return res.status(500).json({ error: err.message });
        });
    });
  });
  return router;
};
