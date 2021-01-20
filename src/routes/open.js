const express = require('express');
const router = express.Router();
module.exports = (db) => {
  router.post('/', (req, res) => {
    const user_id = req.body.user_id;
    db.query(
      `SELECT * FROM code_files
                WHERE user_id = $1`,
      [user_id]
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

  router.post('/shared', (req, res) => {
    const user_id = req.body.user_id;
    db.query(
      `SELECT * FROM code_files
                WHERE user_id = $1`,
      [user_id]
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
