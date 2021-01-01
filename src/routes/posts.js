const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(
      `SELECT posts.id, title, content, category, posted_date, firstName, lastName
      FROM posts
      JOIN users ON users.id = user_id
      LIMIT 30;`,
      []
    )
      .then((data) => {
        if (data) {
          res.status(200).send(data.rows);
        } else {
          res.send(false);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
