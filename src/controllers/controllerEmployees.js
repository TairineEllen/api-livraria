const employees = require('../models/employees.json');
const fs = require('fs');

const updateJsonFile = mes => {
  fs.writeFile('./src/models/employees.json', JSON.stringify(employees), 'utf-8', err => {
    err ? res.status(424).send({ message: err.message }) : console.info(mes)
  });
};

const getAllEmployees = (req, res) => {
  res.status(200).send(employees);
};

const registerEmployee = (req, res) => {
  let id = 1;

  if (employees.length > 0) {
    id = employees[employees.length - 1].id + 1;
  };
  const { nome, dataNascimento, cargo } = req.body;

  try {
    employees.push({ id, nome, dataNascimento, cargo });

    updateJsonFile('Funcionário registrado com sucesso');
    res.status(201).send(employees);
    
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const deleteEmployee = (req, res) => {
  const id = req.params.id;

  try {
    const employeeToBeDeleted = employees.find(employee => employee.id == id);
    const index = employees.indexOf(employeeToBeDeleted);

    if (index >= 0) {
      employees.splice(index, 1);

      updateJsonFile('Funcionário deletado com sucesso');
      res.status(200).send('Funcionário deletado com sucesso');

    } else {
      res.status(404).send('Funcionário não encontrado');
    };

  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

module.exports = {
  getAllEmployees,
  registerEmployee,
  deleteEmployee
};