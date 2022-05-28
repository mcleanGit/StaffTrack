// index.js main index for EmployeeTracker app
const inquirer = require('inquirer');
const db = require('./db');
require('console.table');
initialPrompt();

// start function here...
function initialPrompt() {
  inquirer.prompt([
  {
    type: 'list',
    name: 'userSelection',
    message: 'Please select a choice using arrow keys',
    choices: [  
      { name: 'view all departments',
        value: 'VIEW_DEPARTMENTS'
      },
      { name: 'view all roles',
        value: 'VIEW_ROLES'
      },
      { name: 'view all employees',
        value: 'VIEW_EMPLOYEES'
      },
      { name: 'add a department',
        value: 'ADD_DEPARTMENT'
      },
      { name: 'add a role',
        value: 'ADD_ROLE'
      },
      { name: 'add an employee',
        value: 'ADD_EMPLOYEE'
      },
      { name: 'update an employee role',
        value: 'UPDATE_EMPLOYEE_ROLE'
      },
// adding 'bonus' items for deletes
      { name: 'remove department',
        value: 'DELETE_DEPARTMENT'
      },
      { name: 'remove a role',
        value: 'DELETE_ROLE'
      },
      { name: 'remove an employee',
        value: 'DELETE_EMPLOYEE'
      },
      {
        name: 'quit',
        value: 'quit'
      }
    ]
  }

]).then((res) => {
  let choice = res.userSelection;
  // userSelection choice triggers functions
  switch(choice) {
    case 'VIEW_DEPARTMENTS':
      viewDepartments();
      break;
    case 'VIEW_ROLES':
      viewRoles();
      break;
    case 'VIEW_EMPLOYEES':
      viewEmployees();
      break;
    case 'ADD_DEPARTMENT':
      createDepartment();
      break;
    case 'ADD_ROLE':
      createRole();
      break;
    case 'ADD_EMPLOYEE':
      addEmployee();
      break;
    case 'UPDATE_EMPLOYEE_ROLE':
      updateEmployeeRole();
      break;
 // including 'bonus' DELETES
    case 'DELETE_DEPARTMENT':
      deleteDepartment();
      break;
    case 'DELETE_ROLE':
      deleteRole();
      break;
    case 'DELETE_EMPLOYEE':
      deleteEmployee();
      break;
    default:
      quit();
    }
  });
}

// functions res to userSelection...
// grouping all view functions
  function viewDepartments() {
    db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => initialPrompt());
  }

  function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => initialPrompt());
  }
 
  function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => initialPrompt());
  }

// grouping all create/add functions
  function createDepartment() {
      inquirer.prompt([
        {
          name: "name",
          message: "Department Name: " 
        }   
      ]).then((res) => {
        db.createDepartment(res.name)
        .then(() => console.log("Department created!"))
        .then(() => initialPrompt())
      })
    }

  function createRole() {
      inquirer.prompt([
        {
          name: "title",
          message: "title of added role: "
        },
        {
          name: "salary",
          message: "salary of added role: "
        },
        {
          name: "dept_id",
          message: "department id of the added role: ",
        }
        ]).then((res) => {
            db.createRole(res)
            .then(() => console.log("Role created!"))
            .then(() => initialPrompt())
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
          name: "last_name",
          message: "last_name of added employee: "
        },
        {
          type: "input",
          name: "role_id",
          message: "employee's role id: "
        },
        {
          type: "input",
          name: "manager_id",
          message: "id of this employee's manager: "
        }
      ])
      .then((res) => {
        db.createEmployee(res)
        .then(() => console.log("Employee added!"))
        .then(() => initialPrompt())
      })
    }
 
  function updateEmployeeRole () {
      inquirer.prompt ([
        {
          type: "input",
          name: "employee_id",
          message: "select employee_id for role update:  "
        },
        {
          type: "input",
          name: "role_id",
          message: "employee's new role id: "
        },
      ])
      .then((res) => {
        db.updateEmployeeRole(res.employee_id, res.role_id)
        .then(() => console.log("Employee role updated!"))
        .then(() => initialPrompt())
      })
    }

  // grouping all delete functions
  function deleteDepartment() {
      inquirer.prompt ([
        {
          type: "input",
          name: "dept_id",
          message: "select department to be removed by id: ? "
        },
      ])
        .then((res) => {
        db.removeDepartment(res)
        .then(() => console.log("Department deleted!"))
        .then(() => initialPrompt())
      })
  }

  function deleteRole() {
      inquirer.prompt ([
        {
          name: "role_id",
          message: "select role to be removed by id: ? "
        },
      ])
        .then((res) => {
          db.deleteRole(_res)
          .then(() => console.log("Role deleted!"))
          .then(() => initialPrompt())
        })
    }; 

  function deleteEmployee() {
      inquirer.prompt ([
        {
          name: "employee_id",
          message: "select employee to be removed by id: ? "
        },
      ])
      .then((res) => {
        db.deleteEmployee(_res)
        .then(() => console.log("Employee deleted!"))
        .then(() => initialPrompt())
      })        
  }

    function quit() {
    process.exit();
  }

