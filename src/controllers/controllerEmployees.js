const employees = require('../models/employees.json');
const fs = require('fs');

const createJsonFile = mes => {
  fs.writeFile('./src/models/employees.json', JSON.stringify(employees), 'utf-8', err => {
    err ? res.status(424).send({ message: err.message }) : console.info(mes)
  });
};

const registerEmployee = (req, res) => {
  let id = 1;

  if (employees.length > 0) {
    id = employees[employees.length - 1].id + 1;
  };
  const { nome, dataNascimento, cargo } = req.body;

  employees.push({ id, nome, dataNascimento, cargo });  

  createJsonFile('Funcionário registrado com sucesso');  
  res.status(201).send(employees);
};

module.exports = {
  registerEmployee
}