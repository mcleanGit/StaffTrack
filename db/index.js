const connection = require('./connection');

class DB {
 constructor(connection) {
  this.connection = connection;
 }
 findAllDepartments() {
  return this.connection.promise().query(
   'SELECT * FROM departments'
  );
 }
 createDepartment(department) {
  return this.connection.promise().query(
   'INSERT INTO departments (name) VALUES (?) ', department
  );
 }
 removeDepartment(departmentId) {
  return this.connection.promise().query(
   'DELETE FROM departments WHERE id = ?', departmentId
  );
 }

 findAllRoles() {
  return this.connection.promise().query(
  'SELECT * FROM roles'
  );
 }
 createRole(role) {
  return this.connection.promise().query(
   'INSERT INTO roles SET ? ', role
  );
 }
 removeRole(roleId) {
  return this.connection.promise().query(
   'DELETE FROM roles WHERE id = ?', roleId
  );
 }
// this is the basic function
 findAllEmployees() {
  return this.connection.promise().query(
   'SELECT * FROM employees'
  );
 }
 createEmployee(employee) {
  return this.connection.promise().query(
   'INSERT INTO employees SET ? ', employee
  );
 }
 removeEmployee(employeeId) {
  return this.connection.promise().query(
   'DELETE FROM employees WHERE id = ?', employeeId
  );
  
 }
 updateEmployeeRole(employeeId, roleId) {
  return this.connection.promise().query(
   'UPDATE employees SET role_id = ? WHERE id = ?', [roleId, employeeId]
  );
  }

}

module.exports = new DB (connection);