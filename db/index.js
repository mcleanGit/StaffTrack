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
   'INSERT INTO department SET ? ', department
  );
 }
 removeDepartment(departmentId) {
  return this.connection.promise().query(
   'DELETE FROM department WHERE id = ?', departmentId
  );
 }
 findAllRoles() {
  return this.connection.promise().query(
  'SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = departmentId;'
  );
 }
 createRole(role) {
  return this.connection.promise().query(
   'INSERT INTO role SET ? ', role
  );
 }

 removeRole(roleId) {
  return this.connection.promise().query(
   'DELETE FROM role WHERE id = ?', roleId
  );
 }
 findAllEmployees() {
  return this.connection.promise().query(
   "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id, LEFT JOIN department on role.department_id = department.id, LEFT JOIN employee manager on manager.id = employee.manager_id"
  );
 }
 createEmployee(employee) {
  return this.connection.promise().query(
   'SELECT role.id, role.title, role.salary FROM role', employee
  );
 }
 removeEmployee(employeeId) {
  return this.connection.promise().query(
   'DELETE FROM employee WHERE id = ?', employeeId
  );
 }
 updateEmployeeRole(employeeId, roleId) {
  return this.connection.promise().query(
   'UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]
  );
 }
 
}

module.exports = new DB (connection);