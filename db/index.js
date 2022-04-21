const connection = require('./connection');

class DB {
 constructor(connection) {
  this.connection = connection;
 }
 findAllDepartments() {
  return this.connection.promise().query(
   'SELECT department.id, department.name FROM department;'
  );
 }
 createDepartment(department) {
  return this.connection.promise().query(
   'INSERT INTO department SET ? ',
   department
  );
 }
 removeDepartment(departmentId) {
  return this.connection.promise().query(
   'DELETE FROM department WHERE id = ?',
   departmentId
  );

 }
 findAllRoles() {
  return this.connection.promise().query(
   'SELECT role.id, role.title, department.name AS department FROM role LEFT JOIN department ON role.department_id = departmentId;'

  );
 }
 createRole(role) {
  return this.connection.promise().query();
 }
 removeRole(roleId) {
  return this.connection.promise().query();
 }
 findAllEmployees() {
  return this.connection.promise().query();
 }
 createEmployee(employee) {
  return this.connection.promise().query();
 }
 removeEmployee(employeeId) {
  return this.connection.promise().query();
 }
 updateEmployeeRole(employeeId, roleId) {
  return this.connection.promise().query();
 }
 
}