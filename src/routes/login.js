const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//Get a single user
module.exports = (db) => {
  router.get('/', (req, res) => {
    const userId = req.session.user_id;
    console.log(userId);
    if (userId) {
      db.query(
        `SELECT * FROM users
              WHERE id = $1;`,
        [userId]
      )
        .then((data) => {
          if (data) {
            res.status(200).send(data.rows[0]);
          } else {
            req.session = null;
            res.send(false);
          }
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //query user from db
    db.query(
      `SELECT * FROM users
            WHERE email = $1;`,
      [email]
    )
      .then((data) => {
        const hashedPassword = data.rows[0].password;
        const bcryptCheck = bcrypt.compareSync(password, hashedPassword);
        if (bcryptCheck) {
          //set cookie with user id
          req.session.employee_id = data.rows[0].id;
          res.status(200).send(data.rows[0]);
        } else {
          req.session = null;
          res.send(false);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
