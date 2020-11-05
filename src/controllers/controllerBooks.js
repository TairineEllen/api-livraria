const books = require('../models/books.json');
const fs = require('fs');

const updateJsonFile = mess => {
  fs.writeFile('./src/models/books.json', JSON.stringify(books), 'utf-8', err => {
    err ? res.status(424).send({ message: err.message }) : console.info(mess)
  });
};

const registerBook = (req, res) => {
  let id = 1;

  if (books.length > 0) {
    id = books[books.length - 1].id + 1;
  };
  const { titulo, autoria, editora, emEstoque } = req.body;

  books.push({ id, titulo, autoria, editora, emEstoque });

  updateJsonFile('Livro registrado com sucesso');
  res.status(201).send(books);
};

const deleteBook = (req, res) => {
  const id = req.params.id;

  try {
    const bookToBeDeleted = books.find(book => book.id == id);
    const index = books.indexOf(bookToBeDeleted);

    if (index >= 0) {
      books.splice(index, 1);

      updateJsonFile('Livro deletado com sucesso');
      res.status(200).send('Livro deletado com sucesso');

    } else {
      res.status(404).send('Livro não encontrado');
    };

  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

module.exports = {
  registerBook,
  deleteBook
};