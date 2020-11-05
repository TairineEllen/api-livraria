const express = require('express');
const app = express();

app.use(express.json());

const books = require('./routes/routeBooks');
const employees = require('./routes/routeEmployees');


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
app.use('/funcionarios', employees);

module.exports = app;