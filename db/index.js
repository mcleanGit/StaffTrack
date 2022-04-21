const connection = require('./connection');

class DB {
 constructor(connection) {
  this.connection = connection;
 }
 findAllDepartments() {
  return this.connection.promise().query(
   `SELECT department.id, department.name FROM department;`
  );
 }
 createDepartment(department) {
  return this.connection.promise().query(
   `INSERT INTO department SET ? `
  );
 }
 removeDepartment(departmentId) {
  return this.connection.promise().query(
   `DELETE FROM department WHERE id = ?;`,
   departmentId
  );
 }
 findAllRoles() {
  return this.connection.promise().query(
   `SELECT role.id, role.title, department.name AS department FROM role LEFT JOIN department ON role.department_id = departmentId;`
  );
 }
 createRole(role) {
  return this.connection.promise().query(
   `SELECT department.id, department.name, role.salary FROM employee
   JOIN role ON employee.role_id = role.id
   JOIN department ON department.id = role.department_id
   GROUP BY department.id, department.name`
  );
 }

 removeRole(roleId) {
  return this.connection.promise().query(
   `DELETE FROM role WHERE id = ?;`
  );
 }
 findAllEmployees() {
  return this.connection.promise().query(
   `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name 
    AS department, role.salary,
   CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
   LEFT JOIN role
    ON employee.role_id = role.id, 
   LEFT JOIN department
    ON department.id = role.department_id
   LEFT JOIN emmployee manager
    ON manager.id =employee.manager_id`
  );
 }
 createEmployee(employee) {
  return this.connection.promise().query(
   `SELECT role.id, role.title, role.salary FROM role`
  );
 }
 removeEmployee(employeeId) {
  return this.connection.promise().query(
   `SELECT employee.id, employee.first_name, employee.last_name FROM employee`
  );
 }
 updateEmployeeRole(employeeId, roleId) {
  return this.connection.promise().query(
   `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, 
   CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id, JOIN department ON department.id = role.department_id
    JOIN employee manager ON manager.id = employee.manager_id`
  );
 }
 
}