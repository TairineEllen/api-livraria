const books = require('../models/books.json');
const fs = require('fs')

const createJsonFile = mes => {
  fs.writeFile('./src/models/books.json', JSON.stringify(books), 'utf-8', err => {
    err ? res.status(424).send({ message: err.message }) : console.info(mes)
  });
};

const postBook = (req, res) => {
  let id = 1;

  if (books.length > 0) {
    id = books[books.length - 1].id + 1;
  };
  const { titulo, autoria, editora, emEstoque } = req.body;

  books.push({ id, titulo, autoria, editora, emEstoque });  

  createJsonFile('Livro registrado com sucesso');  
  res.status(201).send(books);
};

module.exports = {
  postBook
};