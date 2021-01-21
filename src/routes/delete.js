const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/', (req, res) => {
    const name = req.body.name;
    const extension = req.body.extension;
    const shared = req.body.shared;
    const user_id = req.body.user_id;

    const queryParams = {
      name,
      extension,
      shared,
      user_id,
    };
    console.log(queryParams);
    db.query(
      `DELETE FROM code_files
            WHERE name = $1
            AND extension = $2
            AND shared = $3
            AND user_id = $4;`,
      [queryParams]
    )
      .then((data) => {
        console.log(data.rows);
        console.log('deleted');
        res.send(data.row[0]);
      })
      .catch((err) => {
        console.log('delete error');
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
