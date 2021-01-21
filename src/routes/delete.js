const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.delete('/', (req, res) => {
    const name = req.body.name;
    const extension = req.body.extension;
    const shared = req.body.shared;
    const user_id = req.body.user_id;

    // const queryParams = {
    //   name,
    //   extension,
    //   shared,
    //   user_id,
    // };
    // console.log(queryParams);
    db.query(
      `DELETE FROM code_files
            WHERE name = '${name}'
            AND extension = '${extension}'
            AND shared = false
            AND user_id = ${user_id};`,
      []
    )
      .then((data) => {
        console.log('deleted');
      })
      .catch((err) => {
        console.log('delete error');
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
