// index.js main index for EmployeeTracker app
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
require('connection');

// start function here...
function initialPrompt() {
  inquirer.prompt([
  {
    type: 'list',
    name: 'userSelection',
    message: 'Please select a choice using arrow keys',
    choices: [ // are all choices represented here ? no, some joins later
      
      { name: 'view all departments',
        value: 'VIEW_DEPARTMENTS' // SQL calls ?? here?
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
  //    { name: 'remove an employee',
  //      value: 'DELETE_EMPLOYEE' // SQL calls
  //    },  // not required
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
//    case 'remove an employee':  // this not required
 //     removeEmployee();
 //     break;
    // case 'exit':
    //  connection.end();
     // break;
     default: 
      process.exit();
  }
});
}

// functions res to userSelection...
  function viewDepartments() {
    let query = `SELECT
      department.id
      department.name
    FROM departments`

    connection.query(query, res.departments, (err, res) => {
      if (err) throw err;
      console.table(
        [
        department.id,
        department.name
        ]);
      initialPrompt();
    })
  }

  function viewRoles() {
    let query = `SELECT
      role.id
      role.title
      role.department
      role.salary
    FROM employees`

    connection.query(query, res.roles, (err, res) => {
      if (err) throw err;
      console.table([
        role.id,
        role.title,
        role.department,
        role.salary
      ]);
      initialPrompt();
    })
  }
    
  function viewEmployees() {
    let query = `SELECT
      employee.id,
      employee.first_name,
      employee.last_name,
      employee.role,
      employee.department,
      employee.salary,
      employee.manager
    FROM employees`
  
    connection.query(query, res.employees, (err, res) => {
      if (err) throw err;
      console.table(
        [
        employee.id,
        employee.first_name,
        employee.last_name,
        employee.role,
        employee.department,
        employee.salary,
        employee.manager
        ]); 
      initialPrompt();
    });
  }
    
  function addDepartment() {
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Department Name: " 
        }   
      ]).then((res) => {
        let query = `INSERT INTO departments SET ?`;
          if (err) throw (err);
          console.table([department.name]);
          initialPrompt();

          connection.query(query, res.department, (err, res) => {
            if (err) throw err;
            console.table([
              role.id,
              role.title,
              role.department,
              role.salary
            ]);
          })
        });
      }

    function addRole() {
      inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "title of added role: "
        },
        {
          type: "input",
          name: "salary",
          message: "salary of added role: "
        },
        {
          type: "input",
          name: "department",
          message: "department of the added role: "
        }
      ]).then((res) => {
        let query = `INSERT INTO roles SET ?`;
          if (err) throw (err);
          console.table(
          [
            role.title, role.title, role.department
          ]);
          initialPrompt();
      })
    }

    function addEmployee() {
      inquirer.prompt([
        {
          type: "input",
          name: "first_name",
          message: "first_name of added employee: "
        },
        {
          type: "input",
          name: "last_name",
          message: "last_name of added employee: "
        },
        {
          type: "input",
          name: "role",
          message: "employee's role: "
        },
        {
          type: "input",
          name: "manager",
          message: "name of this employee's manager: "
        }
        ]).then((res) => {
          let query = `INSERT INTO employees SET ?`;
            if (err) throw (err);
            console.table(
              [
                employee.first_name,
                employee.last_name,
                employee.role,
                employee.manager
              ]);
            initialPrompt();
        })
      }

      function updateRole() {
        inquirer.prompt ([
          {
            type: number,
            name: "employee_id",
            message: "select employee_id for role update:  "
          },
          {
            type: "input",
            name: "name",
            message: "employee's new role: "
          },
        ]).then((res) => {
          let query = `INSERT INTO employees SET id ?`;
            if (err) throw (err);
            console.table(
              [
                employee.id,
                employee.newRole,
              ]);
          initialPrompt();
      });
    }     
// removeEmployee(); not required
