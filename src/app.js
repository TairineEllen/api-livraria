const express = require('express');
const app = express();

app.use(express.json());

const books = require('./routes/routeBooks');


app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Alow-Headers',
    'Origin', 'X-Request-With', 'Content-Type', 'Accept'
  );
  console.info('Nova requisição realizada');
  next();
});

app.use('/livros', books);

module.exports = app;