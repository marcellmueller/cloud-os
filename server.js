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
    keys: ['user_id'],
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
const logoutRoutes = require('./routes/logout');
const createRoutes = require('./routes/create');

app.use('/login', loginRoutes(db));
app.use('/logout', logoutRoutes(db));
app.use('/create', createRoutes(db));

app.get('/', (req, res) => {
  console.log(req.session);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
