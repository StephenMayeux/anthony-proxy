const path = require('path');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: 'Stephen' });
});

app.get('/campers', (req, res) => {
  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(campers => {
      console.log('I am at the top');
      res.render('campers', { campers })
    });

  console.log('I am at the bottom');
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log('Running on port', port);
});
