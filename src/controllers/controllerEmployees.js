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

const getAgeEmployeeById = (req, res) => {
  const id = req.params.id;

  try {
    const employee = employees.find(employee => employee.id == id);

    if (employee) {
      const date = employee.dataDeNascimento.split('/');
      const currentDate = new Date();
      const age = currentDate.getFullYear() - parseInt(date[2])
      res.status(200).send({
        nome: employee.nome,
        idade: age
      });
    } else {
      res.status(404).send('Funcionário não encontrado')
    };
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const registerEmployee = (req, res) => {
  let id = 1;

  if (employees.length > 0) {
    id = employees[employees.length - 1].id + 1;
  };
  const { nome, dataDeNascimento, cargo } = req.body;

  try {
    employees.push({ id, nome, dataDeNascimento, cargo });

    updateJsonFile('Funcionário registrado com sucesso');
    res.status(201).send(employees);

  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const updateEmployeeWithPut = (req, res) => {
  const id = req.params.id;

  try {
    const employeeToBeUpdated = employees.find(employee => employee.id == id);

    if (employeeToBeUpdated) {
      const newInfos = req.body;
      const index = employees.indexOf(employeeToBeUpdated);

      employees.splice(index, 1, newInfos);

      updateJsonFile('Livro atualizado com sucesso');

      res.status(200).send(employeeToBeUpdated);

    } else {
      res.status(404).send('Livro não encontrado');
    };
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
  getAgeEmployeeById,
  registerEmployee,
  updateEmployeeWithPut,
  deleteEmployee
};