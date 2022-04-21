// create the connection to *database*
const mysql = require('mysql2');

const connection = mysql.createConnection({
 host: 'localhost',
// port: '3001',
 user: 'root',
 password: '02468a13579B!',
 database: 'employeeTracker_db'
})

connection.connect(function (err) {
  if (err) throw err;
  console.log("connection made!");  // works to here
});

module.exports = connection;