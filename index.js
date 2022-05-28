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
        value: 'VIEW_DEPARTMENTS' // SQL calls here grouping VIEWs
      },
      { name: 'view all roles',
        value: 'VIEW_ROLES'
      },
      { name: 'view all employees',
        value: 'VIEW_EMPLOYEES'
      },
//      { name: 'view all employees full info',
//        value: 'VIEW_ALL_EMPLOYEES'
//      },
      { name: 'add a department', // SQL calls here grouping ADDs
        value: 'ADD_DEPARTMENT'
      },
      { name: 'add a role',
        value: 'ADD_ROLE'
      },
      { name: 'add an employee',
        value: 'ADD_EMPLOYEE'
      },
      { name: 'update an employee role', // SQL call here for UPDATE
        value: 'UPDATE_EMPLOYEE_ROLE'
      },
  // remainder are 'bonus' items ... comment out for now
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
      // but adding removes DELETEs for dept, role, employee
      { name: 'remove department',
        value: 'DELETE_DEPARTMENT'
      },
      { name: 'remove a role',
        value: 'DELETE_ROLE'
      },
      { name: 'remove an employee',
        value: 'DELETE_EMPLOYEE'
      },
/*
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
  // userSelection choices trigger functions
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
//    case 'VIEW_ALL_EMPLOYEES':
//      viewAllEmployees();
//      break;
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
  // the remainder are 'bonus' items... comment out for now
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
   // DELETES, however, are worth including
    case 'DELETE_DEPARTMENT':
      deleteDepartment();
      break;
    case 'DELETE_ROLE':
      deleteRole();
      break;
    case 'DELETE_EMPLOYEE':
      deleteEmployee();
      break;
 /*   case 'VIEW_DEPARTMENT_BUDGET':
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
/*
  function viewAllEmployeesPlus() {
    db.findAllEmployeesPlus()
      .then(([rows]) => {
        let employees = rows;
        console.table(employees)   
      })
     .then(() => initialPrompt())
    }
 */
  function createDepartment() {
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

      /*
//    function createRole() {
//      db.findAllDepartments()
//       .then(([rows]) => {
//        let departments = rows;
//         const departmentChoices = departments.map(( { id, name }) =>
//           ({
//            name: name,
//            value: id
//           }));
      inquirer.prompt([
        ETC
        
 */   
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
          name: "manager_id",
          message: "id of this employee's manager: "
        }
      ]).then((_res) => {
        let query = `INSERT INTO employee SET ?`;
          if (err) throw (err);
          console.table(
            [
              employee.first_name,
              employee.last_name,
              employee.role,
              employee.managerId
            ]);
      then((res) => {
        db.createEmployee(res)
        .then(() => console.log("Employee added!"))
        .then(() => initialPrompt())
      })

 /*     .then((_res) => {
          let query = `INSERT INTO employee SET ?`;
            if (err) throw (err);
            console.table(
              [
                employee.first_name,
                employee.last_name,
                employee.role,
                employee.managerId
              ]);
            initialPrompt();
        })
*/
      function updateEmployee () {
        inquirer.prompt ([
          {
            type: "input",
            name: "employee_id",
            message: "select employee_id for role update:  "
          },
          {
            type: "input",
            name: "name",
            message: "employee's new role: "
          },
        ]).then((_res) => {
          let query = `INSERT INTO roles SET id ?`;
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
            type: "input",
            name: "dept_id",
            message: "select department to be removed by id: ? "
          },
        ]).then((_res) => {
         let query = `DELETE FROM departments WHERE id = ?`;
  //           if (_err) throw (err);
   //          console.table(
   //            [
    //             departments.name
    //           ]
              ).then((res) => {
              db.deleteDepartment(_res)
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
      ]).then((res) => {
        let query = `DELETE FROM roles WHERE id = ?`;
          if (err) throw (err);
          console.table(
              [
                roles.name
              ]
          );
        initialPrompt();
    });
  } 

    function deleteEmployee() {
      inquirer.prompt ([
        {
          name: "employee_id",
          message: "select employee to be removed by id: ? "
        },
      ]).then((res) => {
        let query = `DELETE FROM employees WHERE id = ?`;
          if (err) throw (err);
          console.table(
              [
                employees.name
              ]
          );
        initialPrompt();
    });
  }

    function quit() {
    process.exit();
  }
*/
})
    }
