const express = require('express');
const router = express.Router();
module.exports = (db) => {
  router.post('/', (req, res) => {
    const user_id = req.body.user_id;
    const name = req.body.name;
    const extension = req.body.extension;
    const content = req.body.content;
    const shared = req.body.shared;

    const queryParams = [user_id, name, extension, content, shared];
    console.log(queryParams);
    db.query(
      `SELECT * FROM code_files
              WHERE name = $1
              AND user_id = $2;`,
      [name, user_id]
    ).then((data) => {
      console.log(data.rows);
      if (!data.rows[0]) {
        db.query(
          `INSERT INTO code_files (user_id, name, extension, content, shared)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;`,
          queryParams
        )
          .then((data) => {
            const file = data.rows[0];
            console.log(file);
            return res.status(200).send(file);
          })
          .catch((err) => {
            return res.status(500).send('error');
          });
      }
      if (data.rows[0]) {
        db.query(
          `UPDATE code_files 
          SET user_id = $1,
          name = $2,
          extension = $3,
          content = $4,
          shared = $5
          WHERE user_id = $1
          AND name = $2
          RETURNING *;`,
          queryParams
        )
          .then((data) => {
            const file = data.rows[0];
            console.log(file);
            return res.status(200).send(file);
          })
          .catch((err) => {
            return res.status(500).send('error');
          });
      }
    });
  });
  return router;
};
