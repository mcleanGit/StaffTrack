// index.js main index for EmployeeTracker app
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const db = require('./db');
require('connection');

// start function here...
function initialPrompt() {
prompt([
  {
    type: 'list',
    name: 'userSelection',
    message: 'Please select a choice using arrow keys',
    choices: [ // are all choices represented here ? no, some joins later
      
      { name: 'view all departments',
        value: 'VIEW_DEPARTMENTS' // SQL calls
      },
      { name: 'view all roles',
        value: 'VIEW_ROLES' // SQL calls
      },
      { name: 'view all employees',
        value: 'VIEW_EMPLOYEES' // SQL calls
      },
      { name: 'add a department',
        value: 'ADD_DEPARTMENT' // SQL calls
      },
      { name: 'add a role',
        value: 'ADD_ROLE' // SQL calls
      },
      { name: 'add an employee',
        value: 'ADD_EMPLOYEE' // SQL calls
      },
      { name: 'update an employee role',
        value: 'UPDATE_ROLE' // SQL calls
      },
      { name: 'remove an employee',
        value: 'DELETE_EMPLOYEE' // SQL calls
      },
      {
        name: 'exit',
        value: 'quit'
      }
    ]
  }
]).then((res) => {
  console.log(res.userSelection);
  // userSelection choices trigger functions -- still to set up
  switch(res.userSelection) {
    case 'view all departments':
      viewDepartments();
      break;
    case 'view all roles':
      viewRoles();
      break;
    case 'view all employees':
      viewEmployees();
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
    // case 'exit':
    //  connection.end();
     // break;
     default: 
      process.exit();
  }
});
}

// functions res to userSelection...
  viewDepartments();
      
  viewRoles();
    
  viewEmployees();

  addDepartment();

  addRole();
    
  addEmployee();
  
  updateRole();
      
  removeEmployee();
