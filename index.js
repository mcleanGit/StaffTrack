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
        value: 'UPDATE_EMPLOYEE_ROLE' // SQL calls
      },
  //    { name: 'remove an employee',
  //      value: 'DELETE_EMPLOYEE' // SQL calls
  //    },  // not required
      {
        name: 'quit',
        value: 'quit'
      }
    ]
  }

]).then((res) => {
  let choice = res.userSelection; 
  console.log(choice);
  // userSelection choices trigger functions -- still to set up
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
      addDepartment();
      // requires prompt: department.name, add to DB
      break;
    case 'ADD_ROLE':
      addRole();
      // requires prompt: name, salary, department...
      break;
    case 'ADD_EMPLOYEE':
      addEmployee();
      // requires prompt: firstname, lastname, role, manager...
      break;
    case 'UPDATE_EMPLOYEE_ROLE':
      updateEmployeeRole();
      // requires prompt: select employee, update role...
      break;
//    case 'remove an employee':  // this not required
 //     removeEmployee();
 //     break;
 // bonus items: update employee managers
 // view employees by manager
 // view employees by department
 // delete departments, roles, employees
 // view total budget by department (salaries)
        default: 
        quit();
  }
});
}

// functions res to userSelection...
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
    
  function addDepartment() {
      inquirer.prompt([
        {
          name: "name",
          message: "Department Name: " 
        }   
      ]).then((res) => {
        db.createDepartment(res)
        .then(() => console.log(this.message))
        .then(() => initialPrompt())
      })
    }

    function addRole() {
      db.findAllDepartments()
      .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(( { id, name }) =>
         ({
           name: name,
           value: id
         }));

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
          type: "list",
          name: "department",
          message: "department of the added role: ",
          choices: departmentChoices
        }
      ]).then(role => {
          db.createRole(role)
          .then(() => console.log(message))
          .then(() => initialPrompt())
        })
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
          name: "role",
          message: "employee's role: "
        },
        {
          type: "input",
          name: "manager",
          message: "name of this employee's manager: "
        }
        ]).then((res) => {
          let query = `INSERT INTO employee SET ?`;
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

      function updateEmployeeRole() {
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
          let query = `INSERT INTO employee SET id ?`;
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
function quit() {
  process.exit();
}
