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
        value: 'VIEW_DEPARTMENTS' // SQL calls here ?
      },
      { name: 'view all roles',
        value: 'VIEW_ROLES'
      },
      { name: 'view all employees',
        value: 'VIEW_EMPLOYEES' // SQL calls mysql error here!
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
  // the remainder are 'bonus' items... comment out for now
  /*
      { name: 'update employee managers',
        value: 'UPDATE_EMPLOYEE_MANAGER'
      },
      { name: 'view employee by manager',
        value: 'VIEW_EMPLOYEE_BY_MANAGER'
      },
      { name: 'view employees by department',
        value: 'VIEW_EMPLOYEES_BY_DEPARTMENT'
      },
      */
      { name: 'remove department',
        value: 'DELETE_DEPARTMENT'
      },
      /*
      { name: 'remove a role',
        value: 'DELETE_ROLE'
      },
      { name: 'remove an employee',
        value: 'DELETE_EMPLOYEE'
      },
      { name: 'view department budget',
        value: 'VIEW_DEPARTMENT_BUDGET'
      },
  */
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
  // the remainder are 'bonus' items... comment our for now
  /*
    case 'UPDATE_EMPLOYEE_MANAGER':
      updateEmployeeManager();
      break;
    case 'VIEW_EMPLOYEE_BY_MANAGER':
      viewEmployeeByManager();
      break;
    case 'VIEW_EMPLOYEES_BY_DEPARTMENT':
      viewEmployeesByDepartment();
      break;
    */
    case 'DELETE_DEPARTMENT':
      deleteDepartment();
      break;
    /*
    case 'DELETE_ROLE':
      deleteRole();
      break;
    case 'DELETE_EMPLOYEE':
      deleteEmployee();
      break;
    case 'VIEW_DEPARTMENT_BUDGET':
      viewDepartmentBudget();
      break;
  */
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
        .then(() => console.log("Department created!"))
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
          type: number,
          name: "manager",
          message: "id of this employee's manager: "
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

      function deleteDepartment() {
        inquirer.prompt ([
          {
            name: "dept_id",
            message: "select department by id for removal: ? "
          },
  
        ]).then((res) => {
          let query = `DELETE FROM departments ? WHERE id = ?`;
            if (err) throw (err);
            console.table(
              [
                departments.id
              ]);
          initialPrompt();
      });
    }     
// removeEmployee(); not required
// add other ones here...
function quit() {
  process.exit();
  }
