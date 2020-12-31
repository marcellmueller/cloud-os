const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {
  router.post('/', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;
    // db.query(
    //   `SELECT * FROM users
    //           WHERE email = $1;`,
    //   [email]
    // ).then((data) => {
    //   if (data.rows[0] !== undefined) {
    //     return res.send('exists');
    //   }
    //   if (password !== password2) {
    //     return res.send('mismatch');
    //   }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const queryParams = [firstName, lastName, email, hashedPassword, id];
    console.log(queryParams);
    db.query(
      `UPDATE users
        SET firstName = $1,
        lastName = $2,
        email = $3,
        password = $4
        WHERE users.id = $5
        RETURNING *;`,
      queryParams
    )
      .then((data) => {
        console.log(data.rows);
        const user = data.rows[0];
        return res.status(200).send(user);
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  });

  return router;
};

// DROP TABLE IF EXISTS users CASCADE;

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY NOT NULL,
//   firstName VARCHAR(255) NOT NULL,
//   lastName VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   is_admin BOOLEAN NOT NULL DEFAULT FALSE,
//   user_since TIMESTAMPTZ
// );
