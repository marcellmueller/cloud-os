const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1'],
    overwrite: true,
  })
);

//import process.env settings
require('dotenv').config();

const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});
db.connect();

const PORT = process.env.PORT || 8080;

//import routes
const loginRoutes = require('./routes/login');
// const logoutRoutes = require('./routes/logout');

app.use('/login', loginRoutes(db));
// app.use('/logout', logoutRoutes(db));

app.get('/', (req, res) => {
  console.log(req.session);
});

app.post('/create', (req, res) => {
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

app.post('/logout', (req, res) => {
  res.clearCookie(req.session.user_id);
  console.log(req.session);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
