// this file may not be needed, cf class DB in db/index.js
// where the query details are filled in (tbc)
class sqlQueries {

 constructor(connection) {
  this.connection = connection;
 }
  // functions would be gathered here in promise form
  viewDepartments() {
   return this.connection.promise().query("Select * from departments;")  
  }

  // ETC
  
  viewRoles() {
   return this.connection.promise().query("Select role.id, role.title, role.department, role.salary from employees;")
  }

  viewEmployees() {
   return this.connection.promise().query("Select employee.id employee.first_name, employee.last_name, employee.role, employee.department, employee.salary, employee.manager from employees;")
  }

  addDepartment() {
   return this.connection.promise().query("Insert into departments set ?;")
  }
 
  addRole () {
   return this.connection.promise().query("Insert into roles set ?;")
  }

  addEmployee () {
   return this.connection.promis().query("Insert into employees set ?;")
  }
 
}