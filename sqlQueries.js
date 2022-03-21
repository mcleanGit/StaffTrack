class sqlQueries {

 constructor(connection) {
  this.connection = connection;
 }
  // functions would be gathered here in promise form
  viewDepartments() {
   return this.connection.promise().query("Select * from departments;")  
  }

  // ETC
  /*
  viewRoles

  viewEmployees

  addDepartment
 
  addRole

  addEmployee