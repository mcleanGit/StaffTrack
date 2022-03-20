// create the connection to *database*
const mysql = require('mysql2');

const connection = mysql.createConnection({
 host: 'localhost',
 port: '3001',
 user: 'root',
 password: '',
 database: 'employeeTracker_db'
})

connection.connect(function (err) {
 // if (err) throw err;
  console.log("connection made!");  // works to here
  initialPrompt();
});

module.exports = connection;