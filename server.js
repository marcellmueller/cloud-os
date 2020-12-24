const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
