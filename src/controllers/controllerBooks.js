const books = require('../models/books.json');
const fs = require('fs');
const { runInNewContext } = require('vm');

const updateJsonFile = mess => {
  fs.writeFile('./src/models/books.json', JSON.stringify(books), 'utf-8', err => {
    err ? res.status(424).send({ message: err.message }) : console.info(mess)
  });
};

const getBooksInStock = (req, res) => {
  try {
    const bookInStock = books.filter(book => book.emEstoque);
    res.status(200).send(bookInStock);
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const getBooksByPublisher = (req, res) => {
  const publishers = []

  try {
    books.map(book => book.editora).forEach(publisher => {
      if (publishers.indexOf(publisher) === -1) {
        publishers.push(publisher);
      };
    });

    const booksByPublisher = publishers.map(publisher => ({
      editora: publisher,
      livros: books.filter(book => book.editora == publisher).map(book => ({
        id: book.id,
        titulo: book.titulo,
        autoria: book.autoria,
        emEstoque: book.emEstoque
      }))
    }));
    res.status(200).send(booksByPublisher)
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const registerBook = (req, res) => {
  let id = 1;

  if (books.length > 0) {
    id = books[books.length - 1].id + 1;
  };
  const { titulo, autoria, editora, emEstoque } = req.body;

  try {
    books.push({ id, titulo, autoria, editora, emEstoque });

    updateJsonFile('Livro registrado com sucesso');
    res.status(201).send(books);

  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const updateBookWithPut = (req, res) => {
  const id = req.params.id;

  try {
    const bookToBeUpdated = books.find(book => book.id == id);

    if (bookToBeUpdated) {
      const newInfos = req.body;
      const index = books.indexOf(bookToBeUpdated);

      books.splice(index, 1, newInfos);
      updateJsonFile('Livro atualizado com sucesso');

      res.status(200).send(bookToBeUpdated);

    } else {
      res.status(404).send('Livro não encontrado');
    };
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const updateBookWithPatch = (req, res) => {
  const id = req.params.id;

  try {
    const bookToBeUpdated = books.find(book => book.id == id);

    if (bookToBeUpdated) {
      const newInfos = req.body;

      Object.keys(newInfos).forEach(key => {
        bookToBeUpdated[key] = newInfos[key]
      });

      updateJsonFile('Livro atualizado com sucesso');

      res.status(200).send(bookToBeUpdated);

    } else {
      res.status(404).send('Livro não encontrado');
    };
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
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
  getBooksInStock,
  getBooksByPublisher,
  registerBook,
  updateBookWithPut,
  updateBookWithPatch,
  deleteBook
};