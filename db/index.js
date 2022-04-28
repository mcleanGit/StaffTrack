const connection = require('./connection');

class DB {
 constructor(connection) {
  this.connection = connection;
 }
 findAllDepartments() {
  return this.connection.promise().query(
   'SELECT departments.id, departments.name FROM departments;'
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
  'SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM role LEFT JOIN department ON role.department_id = departmentId;'
  );
 }
 createRole(role) {
  return this.connection.promise().query(
   'INSERT INTO role SET ? ', role
  );
 }
 removeRole(roleId) {
  return this.connection.promise().query(
   'DELETE FROM roles WHERE id = ?', roleId
  );
 }

 findAllEmployees() {
  return this.connection.promise().query(
   "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN role ON employee.role_id = role.id, LEFT JOIN departments on role.department_id = department.id, LEFT JOIN employee manager on manager.id = employee.manager_id"
  );
 }
 createEmployee(employee) {
  return this.connection.promise().query(
   'SELECT roles.id, roles.title, roles.salary FROM roles', employee
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
 // others to do from bonus...
 // update employee manager
 // updateEmployeeManager(employeeId, managerId) etc
 // prompt: what is the new manager role?
 // view employees by manager
 // view employees by department
 // delete departments, roles, employees [done]
 // findBudgetByDepartment(departmentId, roleSalary) {
 //  return this.connection.promise().query(
 // 'SELECT department_id * roles.salary FROM roles'

}

module.exports = new DB (connection);