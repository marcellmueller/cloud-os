const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['user_id'],
    overwrite: true,
  })
);

//import process.env settings
require('dotenv').config();

const { Client } = require('pg');
const db = new Client({
  connectionString: process.env.DATABASE_URL,
});
db.connect();

const PORT = process.env.PORT || 8080;

//import routes
const loginRoutes = require('./src/routes/login');
const logoutRoutes = require('./src/routes/logout');
const createRoutes = require('./src/routes/create');
const updateRoutes = require('./src/routes/update');
const postsRoutes = require('./src/routes/posts');
const saveRoutes = require('./src/routes/save');
const openRoutes = require('./src/routes/open');
const deleteRoutes = require('./src/routes/delete');

//use routes
app.use('/login', loginRoutes(db));
app.use('/logout', logoutRoutes(db));
app.use('/create', createRoutes(db));
app.use('/update', updateRoutes(db));
app.use('/posts', postsRoutes(db));
app.use('/save', saveRoutes(db));
app.use('/open', openRoutes(db));
app.use('/delete', deleteRoutes(db));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/users', (req, res) => {
  db.query(`SELECT * FROM users;`, [])
    .then((data) => {
      if (data) {
        res.send(data.rows);
      } else {
        req.session = null;
        res.send(false);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
