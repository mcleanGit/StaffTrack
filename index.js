// index.js main index for EmployeeTracker app
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
// const express = require('express');
// const app = express();

// create the connection to *database*
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3001',
  user: 'root',
  password: '',
  database: 'employee_trackerDB'
})

connection.connect(function (err) {
//  if (err) throw err;
 console.log("connection made!");
 initialPrompt();
});

// insert start function here...
function initialPrompt() {

inquirer.prompt([
  {
    type: 'list',
    name: 'userSelection',
    message: 'Please select a choice using arrow keys',
    choices: [ // are all choices represented here ?
      'view all departments',
      'view all roles',
      'view all employees',
      'add a department',
      'add role',
      'add an employee',
      'update an employee role',
      'remove an employee',
      'exit'  // need exit strategy connection.end()
    ]
  }
]).then((res) => {
  console.log(res.userSelection);
  switch(res.userSelection) {
    case 'view all departments':
      viewAllDepartments();
      break;
    case 'view all roles':
      viewAllRoles();
      break;
    case 'view all employees':
      viewAllEmployees();
      break;
    case 'add a department':
      addDepartment();
      break;
    case 'add role':
      addRole();
      break;
    case 'add an employee':
      addEmployee();
      break;
    case 'update an employee role':
      updateRole();
      break;
    case 'remove an employee':
      removeEmployee();
      break;
    case 'exit':
      connection.end();
      break;
  }
});
}
