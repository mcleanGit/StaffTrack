// create the connection to *database*
const mysql = require('mysql2');

const connection = mysql.createConnection({
 host: 'localhost',
 port: '3001',
 user: 'root',
 password: '',
 database: 'employee_trackerDB'
})

connection.connect(function (err) {
  console.log("connection made!");
initialPrompt();
});

module.exports = connection;