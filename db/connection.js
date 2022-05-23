// create the connection to *database*
const mysql = require('mysql2');

const connection = mysql.createConnection({
 host: 'localhost',
 port: '3306',
 user: 'root',
 password: '02468a13579B!',
 database: 'employee_tracker_db'
})

connection.connect(function (err) {
  if (err) throw err;
  console.log("connection made!");
});

module.exports = connection;