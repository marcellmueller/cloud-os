const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    req.session.user_id = null;
    console.log(req.session);
    res.send('cookie deleted');
  });

  return router;
};
