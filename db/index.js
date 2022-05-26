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
   'DELETE FROM departments WHERE id = ? ', departmentId
  );
 }

 findAllRoles() {
  return this.connection.promise().query(
  'SELECT * FROM roles'
  );
 }
 createRole(role) {
  return this.connection.promise().query(
   'INSERT INTO roles (title, salary, dept_id) VALUES (?,?,?)', role
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
 // this is the expanded function expected in the criteria
/*  findAllEmployeesPlus() {
   let query =
   `SELECT
     employees.id,
     employees.first_name,
     employees.last_name,
     roles.title,
     department.name AS department,
     roles.salary,
     CONCAT(manager.first_name, ' ', manager.last_name) AS manager,
     FROM employees
     LEFT JOIN roles
      ON employee.role_id = role.id
     LEFT JOIN department
      ON departments.id = roles.department_id
     LEFT JOIN employee manager
      ON manager.id = employee.manager.id`
   connection.query(query, (err, res)=>{
    if (err) throw err;
    console.table(res);
    initialPrompt();
   })
 }
*/
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