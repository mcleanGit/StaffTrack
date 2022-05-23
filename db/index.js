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
   'INSERT INTO departments SET ? ', department
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
   'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?), role
  );
 }
 removeRole(roleId) {
  return this.connection.promise().query(
   'DELETE FROM roles WHERE id = ?', roleId
  );
 }

 findAllEmployees() {
  return this.connection.promise().query(
   'SELECT * FROM employees'
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
 // others to do from bonus...
 // update employee manager
 // updateEmployeeManager(employeeId, managerId) etc
 // prompt: what is the new manager role?
 // view employees by manager
 // view employees by department
 // delete department, roles, employees [done]
 // findBudgetByDepartment(departmentId, roleSalary) {
 //  return this.connection.promise().query(
 // 'SELECT department_id * roles.salary FROM roles'

}

module.exports = new DB (connection);